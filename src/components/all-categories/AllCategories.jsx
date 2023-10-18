import { useEffect, useState } from "react"
import "./AllCategories.scss"
import intsance from "../../api"
import CategoryContent from "../category-content/CategoryContent";

const AllCategories = () => {
    const [firstData,setFirstData]=useState([]);
    const [secondtData,setsecondtData]=useState([])
    const [thirdData,setthirdData]=useState([])
    const [fourthData,setfourthData]=useState([])
    const [fifthData,setfifthData]=useState([])


    useEffect(()=>{
        intsance("/browse/categories/toplists/playlists")
        .then(responce=>setFirstData(responce.data.playlists.items.slice(0,4)))
        .catch(err=>console.error(err));

        intsance("/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists")
        .then(responce=>setsecondtData(responce.data.playlists.items.slice(0,4)))
        .catch(err=>console.error(err))

        intsance("/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists")
        .then(responce=>setthirdData(responce.data.playlists.items.slice(0,4)))
        .catch(err=>console.error(err))

        intsance("/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists")
        .then(responce=>setfourthData(responce.data.playlists.items.slice(0,4)))
        .catch(err=>console.error(err))

        intsance("/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists")
        .then(responce=>setfifthData(responce.data.playlists.items.slice(0,4)))
        .catch(err=>console.error(err))
    },[]);

  return (
    <div className="all__categories">
        <CategoryContent data={firstData} title={"Your top mixes"}/>
        <CategoryContent data={secondtData} title={"Made for you"}/>
        <CategoryContent data={thirdData} title={"Recently played"}/>
        <CategoryContent data={fourthData} title={"Jump back in"}/>
        <CategoryContent data={fifthData} title={"Uniquely yours"}/>
    </div>
  )
}

export default AllCategories