import React, { useState, useEffect } from 'react';
import { Loader } from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import { helpHttp } from '../helpers/helpHttp';

const SongSearch = () => {

    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if(search === null) return;
      
      const getData = async () => {

        const { artist, song } = search;

        let artistURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
        let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        setLoading(true);
        /**
         * peticion multiple para varias APIs, cada peticion se guardara
         * en las variables que tengamos en las desestructuracion
         */
        const[artistRes,songRes]= await Promise.all([
            helpHttp().get(artistURL),
            helpHttp().get(songURL),
        ]);
        

        setLyric(songRes);
        setBio(artistRes);

        console.log(artistRes);
        console.log(songRes);
        
        setLoading(false);
      }
    
      getData();
    }, [search])
    

    const handleSearch = (data) => {
        setSearch(data);
    }

    return (
        <div>
            <h2>Song Search</h2>
            { loading && <Loader/>}
            {search && !loading && <SongDetails search={search} lyric={lyric} bio={bio}/>}
            <SongForm handleSearch={handleSearch}/>
            
        </div>
    )
}

export default SongSearch