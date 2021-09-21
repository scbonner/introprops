// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <h1>Product Listing</h1>
{/* Passing in 3 props inside Product component*/}
      <Product 
        name='Google Instead' 
        description='Your AI Assistant' 
        price={60.00} 
        />

      <Product 
        name='iPhone 12 Pro Max' 
        description='Your AI Assistant' 
        price={1200.00} 
        />
    
      <Product 
        name='MackBook Pro' 
        description='Your Expensive Computer' 
        price={2500.00} 
        />


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
