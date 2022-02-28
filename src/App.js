import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       underConst : {
        Docs : false,
        Tutorials : true,
        Community : false
       }
    }
  }
  

  render(){
      return (
        <BrowserRouter>
          <Menu />
          
          <Switch>
              <Route exact path="/" component={Docs}/>
              <Route path="/tutorial" component={Tutorials}/>

              {/* <Route path="/tutorial" render={() => (
                 this.state.underConst.Tutorials ? (<Redirect />) : (<Tutorials />)
              )} /> */}

              <Route path="/community" component={Community}/>
              <Route path="/users/:profileId" component={Profile} />
              <Route component={ErrorPage}/>
          </Switch>

        </ BrowserRouter>
      );
  }
}

export default App;
