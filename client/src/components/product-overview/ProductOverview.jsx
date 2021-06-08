import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GalleryPanel from './gallery-panel/GalleryPanel';
import ContentPanel from './content-panel/ContentPanel';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
`;

function ProductOverview() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
    .get('http://localhost:3000/api/products/25167')
    .then(results => {
      console.log(results.data);
      setProduct(results.data)
    })
    .catch(err => console.log(err));
  }, [])

  const [isLoading, setIsLoading] = useState(true);

  const [currentStyle, setCurrentStyle] = useState('');

  const [styles, setStyles] = useState([]);

  useEffect(() => {
    axios
    .get('http://localhost:3000/api/products/25167/styles')
    .then(results => {
      console.log(results.data.results);
      setStyles(results.data.results);
      let defaultStyle = results.data.results.filter(style => {
        return style['default?'];
      });
      setCurrentStyle(defaultStyle[0]);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [])

  function updateCurrentStyle(select) {
    setCurrentStyle(select)
  }

  return (
    (isLoading) ? <p>Loading...</p>
      :
    <Container>
      <GalleryPanel currentStyle={currentStyle} />
      <ContentPanel product={product} styles={styles} updateCurrentStyle={updateCurrentStyle} currentStyle={currentStyle} />
    </Container>
  )
}

export default ProductOverview;