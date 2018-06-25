import React,{ Component } from 'react';
import { 
  HashRouter, 
  Route, 
  // Redirect, 
} from 'react-router-dom';
import {
  connect,
} from 'react-redux'

import Home from './module/home';
// import Login from './module/login';
import User_list from './module/user_list';
import User_upload from './module/user_upload';

class App extends Component {
    render() {
        return (
          <HashRouter>
            <div className="app-router">
               {/* <Route exact path='/' render={() => <Redirect to='/login'/>}/> */}
               <Route path="/" component={Home}/>
               <Route path="/user_list" component={User_list}/>
               <Route path="/user_upload" component={User_upload}/>
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
