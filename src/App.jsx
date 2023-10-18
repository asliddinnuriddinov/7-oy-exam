import { useLayoutEffect } from 'react';
import './App.scss';
import { getToken } from './helpers/getToken';
import LeftAside from './components/left-aside/LeftAside';
import RightAside from './components/right-aside/RightAside';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Playlist from './routes/playlist/Playlist';
import Like from './routes/like/Like';
import AudioTrack from './components/audio/AudioTrack';
import Scroll from "./scroll-to-top/Scroll"

function App() {

  useLayoutEffect(()=>{
    getToken();
  },[])

  return (
    <div className='app'>
      <Scroll/>
      <div className="app__main">
      <LeftAside/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/playlist/:id' element={<Playlist/>}/>
        <Route path='/like' element={<Like/>}/>
      </Routes>
      <RightAside/>
      </div>
      <AudioTrack/>
    </div>
  )
}

export default App
