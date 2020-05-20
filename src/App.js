import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainFrame from './components/MainFrame/index'
import Login from './components/Login'
import Register from './components/Register'

import { HashRouter ,Route,useHistory } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'
import {initSession} from './API/API'
import { createHashHistory } from "history"
function App() {
  initSession();

  return (
    <Provider store={store}>
      <HashRouter >
        <div className="App">
          <Route exact path={["/mainFrame/:subFrame","/mainFrame","/"]} component={MainFrame} />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
