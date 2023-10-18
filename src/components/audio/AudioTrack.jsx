import "./AudioTrack.scss";
import { AiOutlineHeart,AiFillHeart, AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BiVolumeFull,BiVolumeMute,BiSolidSkipPreviousCircle,BiSolidSkipNextCircle} from "react-icons/bi";
import likeChecker from "../../helpers/likeChecker";
import { ADD_TO_LIKE,REMOVE_FROM_LIKE,CAHNGE_AUDIO_STATE } from "../../redux/action-type";

const AudioTrack = () => {
    const audioTag=useRef();
    const volumeInp=useRef()
    const song=useSelector(state=>state.audio.src);
    const songUrl=song?.track?.preview_url
    const [isPlaying,setIsPlaying]=useState(false);
    const [audioVolume,setAduioVolume]=useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const liked=useSelector(state=>state.like.likedProducts);
    const dispatch=useDispatch()


    useEffect(()=>{
        if(song){
            audioTag.current.play();
            setIsPlaying(true);
            dispatch({payload:true,payload2:song,type:CAHNGE_AUDIO_STATE})
        }
    },[song])


    useEffect(() => {
        if (audioTag.current) {
            audioTag.current.addEventListener("loadedmetadata", () => {
                setDuration(audioTag.current.duration);
            });
        }
    }, [audioTag]);

    useEffect(() => {
        setDuration(0);
    }, [song]);

    const playAudio=()=>{
        if(!audioTag.current.src.includes("/playlist")){
            audioTag.current.play()
            setIsPlaying(true)
            dispatch({payload:true,payload2:song,type:CAHNGE_AUDIO_STATE})
        }
    }

    const pauseAudio=()=>{
        if(!audioTag.current.src.includes("/playlist")){
        audioTag.current.pause();
        setIsPlaying(false)
        dispatch({payload:false,payload2:song,type:CAHNGE_AUDIO_STATE})
        }
    }

    function changeAudioVolume(e){
        setAduioVolume(e)
       audioTag.current.volume=e/100;
    }

    function handleTimeUpdate() {
        setCurrentTime(audioTag.current.currentTime);
    }

    function handleInputChange(e) {
        setCurrentTime(e.target.value);
        audioTag.current.currentTime = e.target.value;
    }

  return (
    <div className="audio__track">
        <div className="track__name">
            <div className="track__name-left">
                <h4>{song?.track?.name}</h4>
                <p>{song?.track?.album?.artists[0].name}</p>
            </div>
            {
                song?
                !likeChecker(song,liked)?
                <button >
                    <AiOutlineHeart onClick={(e)=>{e.stopPropagation();dispatch({type:ADD_TO_LIKE,payload:song})}}/>
                 </button>
                :
                <button >
                     <AiFillHeart onClick={(e)=>{e.stopPropagation();dispatch({type:REMOVE_FROM_LIKE,payload:song})}}  style={{fill:"red"}}/>
                </button>
                :
                <></>
            }
        </div>
        <div className="audio__main">
            <div className="audio__controller">
                <button><BiSolidSkipPreviousCircle/></button>
                {
                    isPlaying?
                    <button onClick={pauseAudio}><AiFillPauseCircle/></button>
                    :
                    <button onClick={playAudio}><AiFillPlayCircle/></button>
                }
                <button><BiSolidSkipNextCircle/></button>
                
            </div>
            <audio onEnded={e=>{setIsPlaying(false);dispatch({payload:false,payload2:song,type:CAHNGE_AUDIO_STATE})}} onTimeUpdate={handleTimeUpdate} controls ref={audioTag} src={songUrl?songUrl:""}></audio>
            <div className="audio__slider">
            <p>0:{Math.floor(currentTime).toString().padStart(2,"0")}</p>
            <input type="range" min={0} value={currentTime} max={duration} onChange={handleInputChange} />
            <p>0:{Math.floor(duration).toString().padStart(2,"0")}</p>
            </div>
        </div>
        <div className="audio__volume">
            {
                audioVolume==0?
                <BiVolumeMute onClick={e=>{audioTag.current.volume=volumeInp.current.value/100;setAduioVolume(1)}}/>
                :
                <BiVolumeFull onClick={e=>{audioTag.current.volume=0;setAduioVolume(0)}}/>
            }
            <input ref={volumeInp} onInput={e=>changeAudioVolume(e.target.value)} type="range" />
        </div>
    </div>
  )
}

export default AudioTrack