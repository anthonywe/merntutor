import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EditItem from './components/EditItem';
import IndexItem from './components/IndexItem';


import App from './App';
import AddItem from './components/AddItem';
//import IndexItem from './components/IndexItem';

ReactDOM.render(
  <Router>
      <div>
       <Route exact path='/' component={IndexItem} />
        <Route path='/add-item' component={AddItem} />
        <Route path='/edit/:id' component={EditItem} />

      </div>
  </Router>,
  document.getElementById('root')
);
