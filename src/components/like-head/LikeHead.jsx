import "./LikeHead.scss";
import { BsChevronLeft, BsChevronRight,BsFillSuitHeartFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai"
import { useSelector } from "react-redux"

const LikeHead = () => {
    const products=useSelector(state=>state.like.likedProducts)
  return (
    <div className="like__head">
        <div className="pag__btns">
            <button><BsChevronLeft/></button>
            <button><BsChevronRight/></button>
        </div>

        <div className="like__head__main">
            <div className="like__head-left">
                <BsFillSuitHeartFill/>
            </div>

            <div className="like__head-right">
                <p>Public Playlist</p>
                <h1>Liked Songs</h1>
                <span>{products.length} songs</span>
            </div>
        </div>
        
    </div>
  )
}

export default LikeHead