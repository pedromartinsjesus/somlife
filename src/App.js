import React from 'react';
import Header from './components/Header/header';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/footer';



function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>

  );
}

export default App;
