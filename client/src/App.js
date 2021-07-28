import Header from './components/Header';
import Home from './components/Home';
import './styles/App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrectUser] = useState({})


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login setCurrentUser={setCurrectUser} user={currentUser}/>
          </Route>
          <Route path='/checkout'>
            <Header user={currentUser}/>
            <Checkout/>
          </Route>
          <Route path='/'>
            <Header user={currentUser}/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
