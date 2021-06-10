import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GalleryPanel from './gallery-panel/GalleryPanel';
import ContentPanel from './content-panel/ContentPanel';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f7f7f7;
`;

function ProductOverview() {
  const [product, setProduct] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('http://localhost:3000/api/products/25169');
        setProduct(result.data);
      } catch (err) {
        setIsError(err);
      }
    };
    fetchData();
  }, [])

  const [isLoading, setIsLoading] = useState(true);
  const [prevStyle, setPrevStyle] = useState('');
  const [currentStyle, setCurrentStyle] = useState('');
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios('http://localhost:3000/api/products/25169/styles');
        setStyles(results.data.results);
        const defaultStyle = results.data.results.filter(style => {
          return style['default?'];
        });
        setPrevStyle(defaultStyle[0]);
        setCurrentStyle(defaultStyle[0]);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [])

  function updateCurrentStyle(select) {
    setPrevStyle(currentStyle)
    setCurrentStyle(select)
  }

  function previewCurrentStyle(preview) {
    setCurrentStyle(preview)
  }

  function revertCurrentStyle() {
    setCurrentStyle(prevStyle)
  }

  return (
    (isLoading) ? <p>Loading...</p>
      :
    <Container>
      <GalleryPanel currentStyle={currentStyle} />
      <ContentPanel product={product}
                    styles={styles}
                    updateCurrentStyle={updateCurrentStyle}
                    previewCurrentStyle={previewCurrentStyle}
                    revertCurrentStyle={revertCurrentStyle}
                    currentStyle={currentStyle} />
    </Container>
  )
}

export default ProductOverview;