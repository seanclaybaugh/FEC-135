import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import GalleryPanel from './gallery-panel/GalleryPanel';
import ContentPanel from './content-panel/ContentPanel';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #fff;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 2s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid #e7e7e7;
  border-right: 2px solid #e7e7e7;
  border-bottom: 2px solid #e7e7e7;
  border-left: 4px solid #e7e7e7;
  background: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
`;

function ProductOverview() {
  const [product, setProduct] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`http://localhost:3000/api/products/${25170}`);
        setProduct(result.data);
      } catch (err) {
        setIsError(true);
      }
    };
    fetchData();
  }, [])

  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const result = await axios(`/api/reviews/meta?product_id=${25170}`);
        setMetaData(result.data);
      } catch (err) {
        setIsError(true);
      }
    };
    fetchMeta();
  }, [])

  const [isLoading, setIsLoading] = useState(true);
  const [prevStyle, setPrevStyle] = useState('');
  const [currentStyle, setCurrentStyle] = useState('');
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios(`http://localhost:3000/api/products/${25170}/styles`);
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
    (isLoading)
      ?
    <Spinner />
      :
    <Container>
      <GalleryPanel currentStyle={currentStyle} />
      <ContentPanel product={product}
                    metaData={metaData}
                    styles={styles}
                    updateCurrentStyle={updateCurrentStyle}
                    previewCurrentStyle={previewCurrentStyle}
                    revertCurrentStyle={revertCurrentStyle}
                    currentStyle={currentStyle} />
    </Container>
  )
}

export default ProductOverview;