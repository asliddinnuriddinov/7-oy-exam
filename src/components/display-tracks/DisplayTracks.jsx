import "./DisplayTracks.scss"
import { BiTimeFive } from "react-icons/bi"
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_LIKE,PLAY_TRACK,REMOVE_FROM_LIKE } from "../../redux/action-type";
import likeChecker from "../../helpers/likeChecker"
import MusicBar from "../music-bar/MusicBar";

const DisplayTracks = ({data,type}) => {

    const dispatch=useDispatch();
    const liked=useSelector(state=>state.like.likedProducts);
    const isPlaying=useSelector(state=>state.audioState)
    

    function duration(x){
        let seconds=Math.floor((x/1000)%60).toString().padStart("2",0)
        let minutes=Math.floor((x/(1000*60))%60)
        return minutes +" : "+ seconds 
    }

    function trackPlayingChecker(data,bool){
        let position=bool?.audioPlayingData?.track?.album?.id==data?.track?.album?.id
        return bool.audioPlaying&&position
    }
  return (
    <div className="playlist__tracks">
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Album</th>
                <th>Date Added</th>
                <th></th>
                <th><BiTimeFive/></th>
            </tr>
        </thead>
        <tbody>
            {
                data?.map((x,i)=>
                        <tr onClick={e=>dispatch({type:PLAY_TRACK,payload:x})} key={x.track.id}>
                            <td style={{width:"91px"}}>{trackPlayingChecker(x,isPlaying)?<MusicBar/>:i+1}</td>
                            <td>
                                <div><img src={x.track.album.images[2].url} loading="lazy" alt="" /></div>
                                <div className="track__title">
                                    <h4>{x.track.name.length>30?x.track.name.slice(0,27)+"...":x.track.name}</h4>
                                    <p>{x.track.album.artists[0].name}</p>
                                </div>
                            </td>
                            <td>{x.track.album.name.length>25?x.track.album.name.slice(0,22)+"...":x.track.album.name}</td>
                            <td></td>
                            <td>{
                                !likeChecker(x,liked)?
                                <button >
                                    <AiOutlineHeart onClick={(e)=>{e.stopPropagation();dispatch({type:ADD_TO_LIKE,payload:x})}}/>
                                </button>
                                :
                                <button >
                                    <AiFillHeart onClick={(e)=>{e.stopPropagation();dispatch({type:REMOVE_FROM_LIKE,payload:x})}}  style={{fill:"red"}}/>
                                    </button>
                                    }</td>
                            <td>{duration(x.track.duration_ms)}</td>
                        </tr>
                    )
            }
        </tbody>
    </table>
</div>
  )
}

export default DisplayTracks