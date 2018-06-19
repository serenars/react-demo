import React,{ Component } from 'react';
import { HashRouter, Route} from 'react-router-dom';
import {
  connect,
} from 'react-redux'

import Home from './components/home';
import Login from './components/login';

class App extends Component {
    render() {
        return (
          <HashRouter>
            <div className="app-router">
             <Route path="/" component={Login}/>
              <Route path="/home" component={Home}/>
            </div>
          </HashRouter>
        );
    }
}

export default connect(
  state => ({
      // t: state.i18n.t,
  }),
  dispatch => ({
      // action: bindActionCreators(reducer, dispatch),
  })
)(App)
