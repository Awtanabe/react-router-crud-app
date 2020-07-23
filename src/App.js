import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamCreate from './components/streams/StreamCreate'
import StreamList from './components/streams/StreamList'


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={StreamList}/>
        <Route path="/create" component={StreamCreate}/>
      </Router>
    </div>
  );
}

export default App;
