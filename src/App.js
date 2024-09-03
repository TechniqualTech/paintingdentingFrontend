import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/common_components/header';
import Footer from './components/common_components/footer';
import Main_body from './pages/main_body';
import Loader from "../src/components/loader"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { CurrentProvider } from '../src/contexts/CurrentContext';
import { BrowserRouter } from 'react-router-dom';

// fadeupanimation
const getFadeUpAnimationAttributes = ({
  duration = 1000,
  offset = '10%',
  anchor = '.temp_anim',
  anchorPlacement = 'top-bottom',
  easing = 'linear',
}) => {
  return {
    'data-aos': 'fade-up',
    'data-aos-duration': duration,
    'data-aos-offset': offset,
    'data-aos-trigger': 'scroll',
    'data-aos-anchor': anchor,
    'data-aos-anchor-placement': anchorPlacement,
    'data-aos-easing': easing,
  };
};

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    // Simulate page loading time
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 2 seconds
  });
  if (loading) {
    return (<>
      <Loader />
    </>
    );
  }
  return (<>
    <BrowserRouter>
      <CurrentProvider>
        <Header />
        <Main_body />
        <Footer />
      </CurrentProvider>
    </BrowserRouter>
  </>);
}

export default App;
export { getFadeUpAnimationAttributes };