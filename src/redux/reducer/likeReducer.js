import { ADD_TO_LIKE,REMOVE_FROM_LIKE } from "../action-type"

const initialState={
    likedProducts:[]
}

const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIKE:
            let arr=state.likedProducts?.filter(x=>x.track.id==action.payload.track.id)
            if(arr.length<1){
                return ({
                    likedProducts:[...state.likedProducts,action.payload]
                })
            }
            else{
                return state
            }

        case "REMOVE_FROM_LIKE":
            let  position=state.likedProducts.findIndex(x=>x.track.id==action.payload.track.id)
            state.likedProducts.splice(position,1)
            return({
                likedProducts:[...state.likedProducts]
            })

        default:
            return state
    }
}

export default likeReducer