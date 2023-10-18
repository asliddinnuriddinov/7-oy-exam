import "./PlaylistTracks.scss"
import { useEffect, useState } from "react";
import intsance from "../../api";
import { useParams } from "react-router-dom";
import DisplayTracks from "../display-tracks/DisplayTracks";

const PlaylistTracks = () => {
    const [playlistData,setPlaylistData]=useState(null);
    const {id}=useParams();

    useEffect(()=>{
        intsance(`/playlists/${id}`)
        .then(responce=>setPlaylistData(responce.data.tracks.items))
        .catch(err=>console.error(err))
    },[id]);

  return (
        <DisplayTracks data={playlistData} type={"playlist"}/>
  )
}

export default PlaylistTracks