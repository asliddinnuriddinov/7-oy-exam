
import "./Like.scss"

import LikeHead from "../../components/like-head/LikeHead"
import LikeTracks from "../../components/like-tracks/LikeTracks"

const Like = () => {

  return (
    <div className="like">
        <LikeHead/>
        <LikeTracks/>
      
    </div>
  )
}

export default Like