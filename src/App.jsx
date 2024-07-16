import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Awareness from './pages/Awareness/Awareness';
import Boycott from './pages/Boycott/Boycott';
import Donations from './pages/Donations/Donations';
import More from './pages/More/More';
import Title from './components/Title/Title';
import ContactUs from './components/ContactUs/contact';
import Footer from './components/Footer/Footer';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={() => (
            <>
              <Home />
              <Title subTitle='Contact Us' title='Reach Out to Us, Express your thoughts' />
              <ContactUs />
            </>
          )} />
          <Route path="/awareness" component={Awareness} />
          <Route path="/boycott" component={Boycott} />
          <Route path="/donations" component={Donations} />
          <Route path="/more" component={More} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
