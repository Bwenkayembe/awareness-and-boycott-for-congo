import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='container'>
        <Home/>
      </div>
    </div>
  );
}

export default App;