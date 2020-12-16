import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TheNav from './components/nav'
import Profile from './components/pages/profile/profile'
import Portfolio from './components/pages/portfolio/portfolio'
import Contact from './components/pages/contact/contact'
import Footer from './components/footer'


function App() {
  return (

<Router>
  <div>
    <TheNav/>
      <Switch>
        <Route exact path= "/MyReact" component={Profile}/>
        <Route exact path= "/MyReact/portfolio" component={Portfolio}/>
        <Route exact path="/MyReact/contact" component={Contact} />
        <Route component ={Profile} />
      </Switch>
    <Footer/>
  </div>
</Router>
  );
}

export default App;
