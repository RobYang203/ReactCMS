import {REGISTER_USER , GET_USER_LIST} from '../ActionType';

const initalState = {
    userList:[]
}


export default function(state=initalState , action){
    const {type} = action;

    switch(type){
        case GET_USER_LIST:
            break;
        default:
            return state;
            break;
    }
}