import "./Featured.scss";
import { useState,useEffect, useLayoutEffect } from "react";
import instance from "../../api"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Featured = () => {
    const [category,setCategory]=useState([]);

    useLayoutEffect(()=>{
        instance('/browse/featured-playlists')
        .then(responce=>setCategory(responce.data.playlists.items.slice(0,6)))
        .catch(err=>console.error(err))
    },[]);
  return (
    <div className="featured">
        <div className="pag__btns">
            <button><BsChevronLeft/></button>
            <button><BsChevronRight/></button>
        </div>
        <h2>Good Afternoon</h2>
        <div className="featured__category__wrapper">
            {
                category?.map(x=>
                        <Link key={x.id} to={`/playlist/${x.id}`}>
                            <div  className="featured__item">
                            <img  src={x.images[0].url} alt="" />
                            <h4>{x.name}</h4>
                        </div>
                        </Link>
                    )
            }
        </div>
    </div>
  )
}

export default Featured