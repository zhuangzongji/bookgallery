// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx';
import BookDetailPage from './pages/BookDetailPage.jsx';
import Header from './components/Header.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/book/:id" component={BookDetailPage} />
      </Switch>
    </Router>
  );
};

export default App;