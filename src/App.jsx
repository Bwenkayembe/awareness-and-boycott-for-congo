import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Quote from './components/Quote/Quote'; // Adjust the path as needed

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='container'>
        <Home/>
      </div>
      <Quote /> {/* Use the Quote component here */}
    </div>
  );
}

export default App;