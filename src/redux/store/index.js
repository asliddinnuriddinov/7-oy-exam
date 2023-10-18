import { createStore,combineReducers } from "redux";
import likeReducer from "../reducer/likeReducer";
import audioReducer from "../reducer/audioReducer";
import audioStateReducer from "../reducer/audioStateReducer";


const rootReducer=combineReducers({
    like: likeReducer,
    audio: audioReducer,
    audioState: audioStateReducer
})

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store