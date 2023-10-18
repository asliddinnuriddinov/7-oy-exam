import axios from "axios";

const intsance=axios.create({
    baseURL:"https://api.spotify.com/v1",
    headers:{
        "Authorization":localStorage.getItem("spotify-token")
    },
    timeout:10000
})

export default intsance