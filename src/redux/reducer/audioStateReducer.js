import {CAHNGE_AUDIO_STATE} from "../action-type"

const initialState={
    audioPlaying:false,
    audioPlayingData:null
}

const audioStateReducer=(state=initialState,action)=>{
    switch(action.type){
        case CAHNGE_AUDIO_STATE:
            return({
                audioPlaying:action.payload,
                audioPlayingData:action.payload2
            })

        default:
            return state;    
    }
}

export default audioStateReducer