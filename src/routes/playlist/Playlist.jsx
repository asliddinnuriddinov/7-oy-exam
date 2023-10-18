
import PlaylistInfo from "../../components/playlist-info/PlaylistInfo"
import PlaylistNav from "../../components/playlist-nav/PlaylistNav"
import PlaylistTracks from "../../components/playlist-tracks/PlaylistTracks"
import "./Playlist.scss"


const Playlist = () => {


  return (
    <div className="playlist">
        <PlaylistInfo/>
        <PlaylistNav/>
        <PlaylistTracks/>
    </div>
  )
}

export default Playlist