import Header from './components/Header';
import Home from './components/Home';
import './styles/App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header/>
          </Route>
          <Route path='/'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
