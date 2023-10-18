export const getToken=async ()=>{
    const CLIENT_ID = "e00c5a46bdb34ab6802fe7da6185c715";
    const CLIENT_SECRET = "ed02a4709f784ad78c3c02bcd9bf6300";
    try{
        const responce=await fetch("https://accounts.spotify.com/api/token",{
            method:"POST",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
                "Authorization":`Basic ${ btoa( CLIENT_ID + ":" + CLIENT_SECRET)}`
            },
            body:"grant_type=client_credentials"
        });
        const auth=await responce.json()
        localStorage.setItem("spotify-token",`${auth.token_type} ${auth.access_token}`)
    }
    catch(err){
        console.error(err);
    }
}