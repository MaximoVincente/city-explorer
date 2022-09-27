import './App.css';
import React from 'react';
import Main from './Main';
import Header from './Components/Header';
import Footer from './Components/Footer';


class App extends React.Component {
 
  render() {
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
