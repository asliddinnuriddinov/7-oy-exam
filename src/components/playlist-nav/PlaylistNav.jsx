import "./PlaylistNav.scss";
import { BsPlayCircleFill } from "react-icons/bs";
import { AiOutlineHeart,AiOutlineSearch } from "react-icons/ai";
import { MdOutlineDownloadForOffline,MdOutlineMoreHoriz } from "react-icons/md"

const PlaylistNav = () => {
  return (
    <div className="playlist__nav">
        <div className="playlist__nav-left">
            <button className="playlist__play-btn"><BsPlayCircleFill/></button>
            <AiOutlineHeart/>
            <MdOutlineDownloadForOffline/>
            <MdOutlineMoreHoriz/>
        </div>
        <div className="playlist__nav-right">
            <AiOutlineSearch/>
            <select>
                <option value="#">Custom order</option>
            </select>
        </div>
    </div>
  )
}

export default PlaylistNav