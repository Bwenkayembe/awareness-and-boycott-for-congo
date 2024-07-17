import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'; // Ensure this import if using index.css for global styles
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Title from './components/Title/Title';
import ContactUs from './components/ContactUs/contact'; // Correct the import path
import Footer from './components/Footer/Footer';
import Awareness from './pages/Awareness/Awareness';
import Boycott from './pages/Boycott/Boycott';
import Donations from './pages/Donations/Donations';
import More from './pages/More/More';
import {Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/awareness' element={<Awareness/>}/>
        <Route path='/donations' element={<Donations/>}/>
        <Route path='/action' element={<Action/>}/>
        <Route path='/more' element={<More/>}/>
        <Route path='/boycott' element={<Boycott/>}/>
      </Routes>
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