import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Nav from './Dogger/Nav';
import Footer from './Dogger/Footer';

import DieuHuongURL from './router/DieuHuongURL';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <DieuHuongURL/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
