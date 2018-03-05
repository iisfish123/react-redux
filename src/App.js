import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import './static/css/reset.less';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer/index';
import Home from './route/home';
import P1 from './route/p1';

class App extends Component {
    componentDidMount(){
        // $('body').css({'background':'#000'});
    }
  render() {
    return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path={'/'} exact={true} component={Home}/>
                  <Route component={P1}/>
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
