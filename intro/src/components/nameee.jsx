import React from 'react'
import ph2 from '../images/sun.webp'
import product from '../product';

 function Nameee() {
    const firstName="tassnyme"
  return (
    <>
    <div> {firstName? `hello , ${firstName}`: "hello , there"} </div>
    <div>{firstName && <img src={product.imageUrl} alt="" />}</div>
    </>
  )
}
export default Nameee; 
