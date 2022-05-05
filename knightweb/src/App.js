import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home.js';
import tokenomic from './components/pages/tokenomic/tokenomic.js';



const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
	  localStorage.getItem('ACCESS_ID') != null ? <Redirect to='/' /> : <Component {...props} />
	)} />
  )
class App extends Component {

  render() {
    return (
	<Router>
		<div>				
			<Route exact path="/" name="Home Page" component = {Home} />
			<Route exact path="/tokenomic" name="tokenomic Page" component = {tokenomic} />
		</div>
	</Router>
    );
  }
}

export default App;
