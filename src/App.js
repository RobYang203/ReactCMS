import React , {useState} from 'react';

import './App.css';
import MainFrame from './components/MainFrame/index'
import Login from './components/Login'
import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter ,Route,useHistory, Redirect } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'
import {initSession ,checkLogined} from './API/API'
import { createHashHistory } from "history"

function App() {
  initSession();
  const [isLogined , setLogin] = useState(false);

  return (
    <Provider store={store}>
      <HashRouter >
        <div className="App">
          <Route exact path={["/mainFrame","/"]}  render={()=>{
            checkLogined().then((isLogined)=>{
              setLogin(isLogined);
            });
            return isLogined?<MainFrame/> : <Redirect to="/login" />
          }} />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
