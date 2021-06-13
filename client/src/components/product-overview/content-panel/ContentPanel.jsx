import React, { useState, useEffect} from 'react';
import axios from 'axios';
import SelectedSkuContext from './contexts/SelectedSkuContext';
import SelectedQtyContext from './contexts/SelectedQtyContext';
import MissingSkuContext from './contexts/MissingSkuContext';
import Spinner from '../spinner/LoadingSpinner';
import Header from './header/Header';
import StylesContainer from './selectors/StylesContainer';
import SizeQtyContainer from './selectors/SizeQtyContainer';
import AddToCart from './selectors/AddToCart';
import Share from './Share';

function ContentPanel({ styles }) {
  const [product, setProduct] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSku, setSelectedSku] = useState(null);
  const [selectedQty, setSelectedQty] = useState(null);
  const [isMissingSku, setIsMissingSku] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`http://localhost:3000/api/products/${25171}`);
        setProduct(result.data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const result = await axios(`/api/reviews/meta?product_id=${25171}`);
        setMetaData(result.data);
      } catch (err) {
        setIsError(true);
      };
      setIsLoading(false);
    };
    fetchMeta();
  }, []);

  function handleMissingSku(val) {
    setIsMissingSku(val);
  }

  return (
    isLoading
      ? <Spinner />
      : (
        <>
          <Header
            product={product}
            metaData={metaData}
          />
          <SelectedSkuContext.Provider value={{ selectedSku, setSelectedSku }}>
            <SelectedQtyContext.Provider value={{ selectedQty, setSelectedQty }}>
              <StylesContainer styles={styles} />
              <MissingSkuContext.Provider value={{ isMissingSku, setIsMissingSku }}>
                <SizeQtyContainer isMissingSku={isMissingSku} />
              </MissingSkuContext.Provider>
              <AddToCart product={product.name} handleMissingSku={handleMissingSku} />
              <Share />
            </SelectedQtyContext.Provider>
          </SelectedSkuContext.Provider>
        </>
      )
  );
}

export default ContentPanel;
