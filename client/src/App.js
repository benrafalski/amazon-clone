import Header from './components/Header';
import Home from './components/Home';
import './styles/App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51JIbRbCeYChu5FtFxmKzrGPN37zOOG1SxSyniY1TuMH9aDD8MaOPKfNpzhaK4JWdUxD4W3QdJVJ5nl0AeeClzYCa00vGOmvQsl')

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
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
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
