function zoomImage(imageRef) {
  const imageUrl = imageRef.currentSrc;

  const imageSrc = new Image();

  imageSrc.onload = () => {
    const imageWidth = imageSrc.naturalWidth;
    const imageHeight = imageSrc.naturalHeight;
    const ratio = imageHeight / imageWidth;

    const percentage = ratio * 100 + '%';
    imageRef.style.paddingBottom = percentage;

    // Zoom and scan on mousemove
    imageRef.onmousemove = function(e) {
      // Get the width of the thumbnail
      const boxWidth = imageRef.clientWidth;
      // Get the cursor position, minus element offset
      const x = e.pageX - this.offsetLeft;
      const y = e.pageY - this.offsetTop;
      // Convert coordinates to % of elem. width & height
      const xPercent = x / (boxWidth / 100) + '%';
      const yPercent = y / (boxWidth * ratio / 100) + '%';

      // Update styles w/actual size
      Object.assign(imageRef.style, {
        backgroundPosition: xPercent + ' ' + yPercent,
        backgroundSize: imageWidth + 'px'
      });
    };

    // Reset when mouse leaves
    imageRef.onmouseleave = (e) => {
      Object.assign(imageRef.style, {
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      });
    };
  }
  imageSrc.src = imageUrl;
}

export default zoomImage;
