import { PLAY_TRACK } from "../action-type"

const initialState={
    src:""
}

const audioReducer=(state=initialState,action)=>{
    switch(action.type){
        case PLAY_TRACK:
            return({
                src:action.payload
            })


        default:
            return state;
    }
}

export default audioReducer;