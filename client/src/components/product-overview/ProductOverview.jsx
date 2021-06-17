import React, {
  lazy, Suspense, useState, useEffect,
} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CurrentStyleContext from './contexts/CurrentStyleContext';
import PreviewStyleContext from './contexts/PreviewStyleContext';
import Spinner from './spinner/LoadingSpinner';

const GalleryPanel = lazy(() => import('./gallery-panel/GalleryPanel'));
const ContentPanel = lazy(() => import('./content-panel/ContentPanel'));

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #fff;
`;

const GalleryDiv = styled.div`
  order: 1;
  margin-left: 20px;
`;

const ContentDiv = styled.div`
  order: 2;
  margin: 10px 20px;
  width: 450px;
`;

function ProductOverview({ productId }) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState('');
  const [previewStyle, setPreviewStyle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios(`http://localhost:3000/api/products/${productId}/styles`);
        setStyles(results.data.results);
        const defaultStyle = results.data.results.filter((style) => (
          style['default?']
        ));
        setCurrentStyle(defaultStyle[0]);
        setPreviewStyle(defaultStyle[0]);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      {!isLoading
      && (
      <PreviewStyleContext.Provider value={{ previewStyle, setPreviewStyle }}>
        <OverviewContainer>
          <GalleryDiv>
            <GalleryPanel />
          </GalleryDiv>
          <CurrentStyleContext.Provider value={{ currentStyle, setCurrentStyle }}>
            <ContentDiv>
              <ContentPanel productId={productId} styles={styles} />
            </ContentDiv>
          </CurrentStyleContext.Provider>
        </OverviewContainer>
      </PreviewStyleContext.Provider>
      )}
    </Suspense>
  );
}

export default ProductOverview;
