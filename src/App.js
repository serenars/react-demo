import React,{ Component } from 'react';
import { HashRouter, Route} from 'react-router-dom';
import {
  connect,
} from 'react-redux'

import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Uploading from './components/upload';

class App extends Component {
    render() {
        return (
          <HashRouter>
            <div style={{height: '100%'}}>
              <Route path="/home" component={Home}/>
              <Route path="/abc1" component={Product}/>
              <Route path="/" component={About}/>
              <Route path="/Uploading" component={Uploading}/>
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
