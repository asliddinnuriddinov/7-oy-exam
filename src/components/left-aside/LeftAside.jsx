import { NavLink } from "react-router-dom"
import "./LeftAside.scss";
import { AiFillHome,AiOutlineSearch } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { BsFillPlusSquareFill,BsFillHeartFill } from "react-icons/bs";
import instance from "../../api"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const LeftAside = () => {
    const [categoryNames,setCategoryNames]=useState([]);
    const track=useSelector(state=>state.audio.src)

    useEffect(()=>{
        instance('/browse/featured-playlists')
        .then(responce=>setCategoryNames(responce.data.playlists.items))
        .catch(err=>console.error(err))
    },[]);

  return (
    <div className="left__aside">
        <div className="left__aside-main">
        <ul className="main__links">
            <li>
                <NavLink className={({isActive})=>isActive?"active__page":""}  to={'/'}><AiFillHome/> Home</NavLink>
            </li>
            <li>
                <NavLink><AiOutlineSearch/> Search</NavLink>
            </li>
            <li>
                <NavLink><VscLibrary/> Your Library</NavLink>
            </li>
        </ul>

        <ul className="like__link">
            <li>
                <NavLink><BsFillPlusSquareFill/> Create Playlist</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>isActive?"active__page":""} to={'/like'}><BsFillHeartFill/> Liked Songs</NavLink>
            </li>
        </ul>

        <ul className="aside__category__links">
            {
                categoryNames?.map(x=>
                        <li key={x.id}>
                            <NavLink className={({isActive})=>isActive?"active__page":""} to={`/playlist/${x.id}`}>{x.name}</NavLink>
                        </li>
                    )
            }
        </ul>
        </div>
        <div className="left__aside-track">
            <img src={track?.track?.album?.images?.at(0)?.url} alt="" />
        </div>
    </div>
  )
}

export default LeftAside