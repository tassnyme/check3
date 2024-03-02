import React from 'react'
import product from '../product';
import Card from 'react-bootstrap/Card';

 function Name() {
    
  return (
    <div>
        <Card.Title>{product.name}</Card.Title>   
    </div>
  )
}
export default Name;
