import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CurrentStyleContext from './contexts/CurrentStyleContext';
import Spinner from './spinner/LoadingSpinner';
import GalleryPanel from './gallery-panel/GalleryPanel';
import ContentPanel from './content-panel/ContentPanel';

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

function ProductOverview() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios(`http://localhost:3000/api/products/${25171}/styles`);
        setStyles(results.data.results);
        const defaultStyle = results.data.results.filter((style) => (
          style['default?']
        ));
        setCurrentStyle(defaultStyle[0]);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    isLoading
      ? <Spinner />
      : (
        <CurrentStyleContext.Provider value={{ currentStyle, setCurrentStyle }}>
          <OverviewContainer>
            <GalleryDiv>
              <GalleryPanel />
            </GalleryDiv>
            <ContentDiv>
              <ContentPanel styles={styles} />
            </ContentDiv>
          </OverviewContainer>
        </CurrentStyleContext.Provider>
      )
  );
}

export default ProductOverview;
