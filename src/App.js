import React from 'react';

import './App.css';
import MainFrame from './components/MainFrame/index'
import Login from './components/Login'
import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter ,Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'
import {initSession} from './API/API'


function App() {
  initSession();
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Route exact path={["/mainFrame","/"]} component={MainFrame}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
