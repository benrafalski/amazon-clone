import Header from './components/Header';
import Home from './components/Home';
import './styles/App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';

function App() {
  const [currentUser, setCurrectUser] = useState({})
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    if(currentUser.email){
      //console.log(currentUser)
      dispatch({
        type: 'SET_USER',
        user: currentUser
      })
    }else{
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  }, [currentUser])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login setCurrentUser={setCurrectUser} user={currentUser}/>
          </Route>
          <Route path='/checkout'>
            <Header setCurrentUser={setCurrectUser}/>
            <Checkout/>
          </Route>
          <Route path='/payment'>
            <Header/>
            <Payment/>
          </Route>
          <Route path='/'>
            <Header setCurrentUser={setCurrectUser}/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
