import {REGISTER_USER ,REGISTER_CLEAN} from '../ActionType'

const initalState = {
    registerCode:"NONE"
};

export default (state=initalState , action)=>{
    const {type} = action;

    switch(type){
        case REGISTER_USER:
            const {registerCode} = action.payload;
            return {
                ...state,
                registerCode:registerCode
            }
            break;
        case REGISTER_CLEAN:
            return initalState;
            break;
        default:
            return state;
            break;
    }

}