import {USER_LOGIN,CHECK_LOGIN,CLEAN_DATA} from '../ActionType'

const initalState = {
    userInfo:{},
    isLogined:false,
    loginCode:"NONE"
};


export default function(state=initalState , action){
    const {type} = action;

    switch(type){
        case USER_LOGIN:
            
            const {userInfo,loginCode} = action.payload;
            return {
                ...state,
                userInfo:userInfo,
                isLogined: userInfo !== null,
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
        case CLEAN_DATA:
            return initalState;
            break;
        default:
            return state;
            break;
    }
}