import "./PlaylistInfo.scss";
import { useEffect, useState } from "react";
import intsance from "../../api";
import { useParams } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PlaylistInfo = () => {
    const {id}=useParams();
    const [playlistData,setPlaylistData]=useState(null);

    useEffect(()=>{
        intsance(`/playlists/${id}`)
        .then(responce=>setPlaylistData(responce.data))
        .catch(err=>console.error(err))
    },[id]);

    function totalDuration(x){
        let sum=0;
        x?.map(time=>sum+=time.track.duration_ms)
        let minutes=Math.floor((sum/(1000*60))%60)
        let hours=Math.floor((sum/(1000*60*60))%24)
        return hours+ "hr "+minutes+"min "
    }

  return (
    <div className="playlist__info">
        <div className="pag__btns">
            <button><BsChevronLeft/></button>
            <button><BsChevronRight/></button>
        </div>
        {
            playlistData?
            <div className="playlist__info-main">
            <div className="playlist__info__left">
                <img  src={playlistData?.images[0].url} alt="" />
            </div>

            <div className="playlist__info__right">
                <small>{playlistData?.public?"PUBLIC PLAYLIST":"PRIVATE PLAYLIST"}</small>
                <h1>{playlistData?.name}</h1>
                <p>{playlistData?.description}</p>
                <span>Made for <strong>{playlistData?.owner.display_name} • </strong>{playlistData?.tracks.total} songs, {totalDuration(playlistData?.tracks.items)}</span>
            </div>
        </div>
        :
        <></>
        }
    </div>
  )
}

export default PlaylistInfo