import {USER_LOGIN,CHECK_LOGIN,CLEAN_DATA,GET_LOGININFO ,RECOVERY_LOGIN,USER_LOGOUT} from '../ActionType'

const initalState = {
    userInfo:{},
    isLogined:false,
    loginCode:"NONE"
};


export default function(state=initalState , action){
    const {type} = action;

    switch(type){
        case USER_LOGIN:
        case RECOVERY_LOGIN:
            const {userInfo,loginCode} = action.payload;
            return {
                ...state,
                userInfo:userInfo,
                isLogined: Object.keys(userInfo).length !== 0,
                loginCode:loginCode
            }
            break;
        case CHECK_LOGIN:
            const {isLogined} = action.payload;
            return {
                ...state,
                isLogined: isLogined
            }
            break;
        case GET_LOGININFO:
            return{
                ...state
            }
            break;
        case CLEAN_DATA:
            return initalState;
            break;
        case USER_LOGOUT:
            return initalState
            break;
        default:
            return state;
            break;
    }
}