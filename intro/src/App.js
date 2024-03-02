import logo from './logo.svg';
import './App.css';
import React from 'react';
import Name from './components/Name';
import Price from './components/Price.';
import Description from './components/Description';
import ImageUrl from './components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Nameee from './components/nameee';



const App = () => {
  
 return (
  <>
  
    <Card style={{ width: '18rem' }}>
      <ImageUrl/>
        <Card.Body>
        <Name/>
        <Description/>
        <Price/>
        </Card.Body>
    </Card>
    <Nameee/>
  
  
  </>
    

   
 );
};
export default App;

