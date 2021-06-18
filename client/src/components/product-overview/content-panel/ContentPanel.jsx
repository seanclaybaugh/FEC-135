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

function ContentPanel({ productId, styles }) {
  const [product, setProduct] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [reviewsData, setReviewsData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSku, setSelectedSku] = useState(null);
  const [selectedQty, setSelectedQty] = useState(null);
  const [isMissingSku, setIsMissingSku] = useState(false);

  function fetchContentData() {
    const getProductData = axios.get(`/api/products/${productId}`);
    const getMetaData = axios.get(`/api/reviews/meta?product_id=${productId}`);
    const getReviewsData = axios.get(`/api/reviews?product_id=${productId}&page=1&count=5000`);

    const promises = [getProductData, getMetaData, getReviewsData];

    Promise.all(promises)
      .then((responses) => Promise.all(responses.map((response) => response)))
      .then((results) => {
        setProduct(results[0].data);
        setMetaData(results[1].data);
        setReviewsData(results[2].data.results);
      })
      .then(() => setIsLoading(false))
      .catch(() => setIsError(true));
  }

  useEffect(() => {
    fetchContentData();
  }, [])

  function handleMissingSku(val) {
    setIsMissingSku(val);
  }

  return (
    <Suspense fallback={<Spinner />}>
      {!isLoading
        && (
          <>
            <Header product={product} metaData={metaData} reviewsData={reviewsData} />
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
