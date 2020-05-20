import {REGISTER_USER , USER_LOGIN , CHECK_LOGIN , CLEAN_DATA,REGISTER_CLEAN} from './ActionType'

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


export const registerUser = (registerCode , errCode)=>{
    return {
        type:REGISTER_USER,
        payload:{
            registerCode:registerCode,
            errCode:errCode
        }
    }
}

export const registerClean = ()=>{
    return {
        type:REGISTER_CLEAN
    }
}