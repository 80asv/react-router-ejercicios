import React from 'react'
import { useParams } from 'react-router-dom'
import SongDetails from '../components/SongDetails'

const SongPages = ({ mySongs }) => {

    let { id } = useParams();
    let currentSong = mySongs[id]; 
    let {search, lyric, bio} = currentSong;
    
    return <SongDetails search={search} lyric={lyric} bio={bio}/>
    
}

export default SongPages