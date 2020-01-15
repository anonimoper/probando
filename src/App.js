import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.css'

import Home from './pages/Home';
import Navbar from './components/NavBar';
import LostForm from './pages/LostForm';
function App({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/lost-form" component={LostForm} />
      </Router>
    </Provider>

  );
}

export default App;
