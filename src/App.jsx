import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'; // Ensure this import if using index.css for global styles
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Title from './components/Title/Title';
import ContactUs from './components/ContactUs/contact'; // Correct the import path
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="container">
        <Home/>
        <Title subTitle='Contact Us' title='Reach Out to Us, Express your thoughts'/>
        <ContactUs/>
      </div>
      <Footer/>
    </div>
  );
}


export default App;