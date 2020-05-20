import {combineReducers} from 'redux'
import login from './login'
import register from './register'
import userList from './userList'

export default combineReducers({login , register ,userList});


