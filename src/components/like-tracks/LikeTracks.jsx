import "./LikeTracks.scss"
import { useSelector } from "react-redux"
import DisplayTracks from "../../components/display-tracks/DisplayTracks"
import { BsPlayCircleFill } from "react-icons/bs";
import { AiOutlineHeart,AiOutlineSearch } from "react-icons/ai";
import { MdOutlineDownloadForOffline,MdOutlineMoreHoriz } from "react-icons/md"

const LikeTracks = () => {
    const products=useSelector(state=>state.like.likedProducts)
  return (
    <div className="like__tracks">
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
          <DisplayTracks data={products} type={"like"}/>
    </div>
  )
}

export default LikeTracks