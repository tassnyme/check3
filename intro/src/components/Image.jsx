import React from 'react'
import product from '../product';
import Card from 'react-bootstrap/Card';

 function ImageUrl() {
    
  return (
    <div>
           <Card.Img variant="top" src={product.imageUrl} />
   </div>
  )
}
export default ImageUrl;
