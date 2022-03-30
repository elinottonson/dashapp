import './App.css';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BOWcollapse from './components/bow/BOWcollapse';
import BOW from './components/bow/BOW';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['x'],
      moreItemsLoading: false,
      hasNextPage: true,
      textToPaste: ""
    };
  }
  render(){
    return (
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage />} /> 
          <Route path="/bow" element={<BOW />} /> 
          <Route path="/pos" element={<iframe style={{width: "calc(100% - 273px)", float: "right"}} src="https://corenlp.run" className="coreNLP"></iframe>} /> 
        </Routes>
      </Router>
  );
  }
}
export default App;
