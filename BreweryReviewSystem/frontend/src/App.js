import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';
import BreweryDetail from './components/BreweryDetail';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/search" component={Search} />
                    <Route path="/brewery/:id" component={BreweryDetail} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
