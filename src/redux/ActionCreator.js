import {REGISTER_USER , USER_LOGIN , CHECK_LOGIN , CLEAN_DATA,REGISTER_CLEAN ,GET_LOGININFO,RECOVERY_LOGIN,USER_LOGOUT,GET_USER_LIST} from './ActionType'

export const userLogin  = (userInfo , loginCode)=>{
    
    return {
        type:USER_LOGIN,
        payload:{
            userInfo:userInfo,
            loginCode:loginCode
        }
    };
}
export const userLogout = ()=>{
    return {
        type:USER_LOGOUT
    }
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
export const recoveryLogin =(userInfo , isRecovry)=>{
    return {
        type:RECOVERY_LOGIN,
        payload:{
            userInfo:userInfo,
            isLogined:isRecovry
        }
    }
}

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

export const getLoginInfo =()=>{
    return {
        type:GET_LOGININFO
    }
}

export const getUserList =(userList)=>{
    return{
        type:GET_USER_LIST,
        payload:{
            userList:userList
        }
    }
}

