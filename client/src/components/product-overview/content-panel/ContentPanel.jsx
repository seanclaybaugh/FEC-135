import React, { lazy, Suspense, useState, useEffect} from 'react';
import axios from 'axios';
import SelectedSkuContext from './contexts/SelectedSkuContext';
import SelectedQtyContext from './contexts/SelectedQtyContext';
import MissingSkuContext from './contexts/MissingSkuContext';
import Spinner from '../spinner/LoadingSpinner';
const Header = lazy(() => import('./header/Header'));
const StylesContainer = lazy(() => import('./selectors/StylesContainer'));
const SizeQtyContainer = lazy(() => import('./selectors/SizeQtyContainer'));
const AddToCart = lazy(() => import('./selectors/AddToCart'));
const Share = lazy(() => import('./Share'));

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
        const result = await axios(`http://localhost:3000/api/products/${25167}`);
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
        const result = await axios(`/api/reviews/meta?product_id=${25167}`);
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
    <Suspense fallback={<Spinner />}>
      {!isLoading
        && (
          <>
            <Header
              product={product}
              metaData={metaData}
            />
            <SelectedSkuContext.Provider value={{ selectedSku, setSelectedSku }}>
              <SelectedQtyContext.Provider value={{ selectedQty, setSelectedQty }}>
                <MissingSkuContext.Provider value={{ isMissingSku, setIsMissingSku }}>
                  <StylesContainer styles={styles} />
                  <SizeQtyContainer />
                </MissingSkuContext.Provider>
                <AddToCart product={product.name} handleMissingSku={handleMissingSku} />
                <Share />
              </SelectedQtyContext.Provider>
            </SelectedSkuContext.Provider>
          </>
        )}
    </Suspense>
  );
}

export default ContentPanel;
