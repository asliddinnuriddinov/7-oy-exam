// import { useSelector } from "react-redux";

function likeChecker(data,liked){
    // const liked=useSelector(state=>state.like.likedProducts);
    const arr=liked?.filter(x=>x.track.album.id==data?.track?.album?.id)
    return arr.length>0
}

export default likeChecker