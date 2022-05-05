import './App.css';
import Homepage from './components/Homepage';
import Learn from './components/Learn';
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
          <Route path="/learn" element={<Learn />} /> 
          <Route path="/bow" element={<BOW />} /> 
          <Route path="/pos" element={<iframe style={{width: "calc(100% - 205px)", float: "right"}} src="https://corenlp.run" className="coreNLP"></iframe>} /> 
          <Route path="/cloud" element= https://nlpcloud.io/home/playground/ /> 
        </Routes>
      </Router>
  );
  }
}
export default App;
