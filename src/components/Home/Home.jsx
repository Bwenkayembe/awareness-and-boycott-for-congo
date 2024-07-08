import React from 'react';
import './Home.css';
import Secondhomepage from '../../assets/images/2ndhomepageimage.webp';
import Quote from '../Quote/Quote'; // Adjust the path as needed

const Home = () => {
  return (
    <div className="MainHome">
      <div className="Content">
        <h1 className="font-poppins">WHAT IS</h1>
        <h1 className="font-libre"><b>AWARENESS & BOYCOTT FOR CONGO?</b></h1>
        <p className="paragraph">
          Awareness & Boycott for Congo is an Ottawa-based website dedicated to educating, 
          mobilizing, and promoting action against the ongoing genocide in the eastern 
          region of the Democratic Republic of Congo. Our goal is to inform and engage individuals 
          about the exploitation occurring in North Kivu, South Kivu, Ituri, and Katanga.
          Join us in discovering why these provinces are being attacked and learn how your 
          consumer choices contribute to the root cause.
        </p>
      </div>
      <div className="Home">
        <img src={Secondhomepage} alt="Children carrying one another" />
      </div>
    </div>
  );
}

export default Home;
