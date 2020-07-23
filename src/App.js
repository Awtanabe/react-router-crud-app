import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamList from './components/streams/StreamList'
import StreamCreate from './components/streams/StreamCreate'
import StreamEdit from './components/streams/StreamEdit'
import StreamDelete from './components/streams/StreamDelete'
import StreamShow from './components/streams/StreamShow'


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={StreamList}/>
        <Route path="/streams/new" component={StreamCreate}/>
        <Route path="/streams/edit" component={StreamEdit}/>
        <Route path="/streams/delete" component={StreamDelete}/>
        <Route path="/streams/show" component={StreamShow}/>
      </Router>
    </div>
  );
}

export default App;
