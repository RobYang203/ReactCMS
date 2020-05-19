import {REGISTER_USER , USER_LOGIN , CHECK_LOGIN , CLEAN_DATA} from './ActionType'

export const userLogin  = (userInfo , loginCode)=>{
    
    return {
        type:USER_LOGIN,
        payload:{
            userInfo:userInfo,
            loginCode:loginCode
        }
    };
}
export const cleanData =()=>{
    return {
        type:CLEAN_DATA
    };
};
export const checkLogin = (isLogined)=>{
    return {
        type:CHECK_LOGIN,
        payload:{
            isLogined:isLogined
        }
    };
};