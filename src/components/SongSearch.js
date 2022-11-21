import React, { useState, useEffect } from 'react';
import { Loader } from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import { helpHttp } from '../helpers/helpHttp';
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import SongTable from './SongTable';
import SongPages from '../pages/SongPages';

let mySongsInit = JSON.parse(localStorage.getItem('mySongs')) || [];

const SongSearch = () => {

    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    const [mySongs, setMySongs] = useState(mySongsInit);

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

        // console.log(artistRes);
        // console.log(songRes);
        
        setLoading(false);
      }
    
      getData();

      // Guardando canciones en el localStorage
      localStorage.setItem('mySongs', JSON.stringify(mySongs));
    }, [search, mySongs]);
    

    const handleSearch = (data) => {
        setSearch(data);
    }

    const handlerSaveSong = () => {
        alert("Cancion guardada en favoritos");
        let currentSong = {
            search,
            lyric,
            bio
        }

        setMySongs((mySongs) => [...mySongs, currentSong]);
        setSearch(null);
    }

    const handlerDeleteSong = (id) => {
        let isDelete = window.confirm(`¿Estas seguro de eliminar la cancion con el id ${id}?`);

        if(isDelete){
            // eliminando cancion segun index
            let songs = mySongs.filter((el, index) => index !== id);
            setMySongs(songs);
            localStorage.setItem('mySongs', JSON.stringify(songs));
        }
    }

    return (
        <div>
            {/* Rutas */}
            <HashRouter>
                <h2>Song Search</h2>
                <header>
                    <nav>
                        <NavLink  activeclassname="active" to="/">Home</NavLink>
                    </nav>
                </header>
                { loading && <Loader/>}
                    <Routes >
                        <Route path='/*' element={<>
                            
                            <Routes>
                                <Route path='/' element={<>
                                    <h2>Home Buscar Cancion</h2>            
                                    <SongForm handleSearch={handleSearch} handlerSaveSong={handlerSaveSong}/>
                                    <SongTable mySongs={mySongs} handlerDeleteSong={handlerDeleteSong}/>
                                    {search && !loading && <SongDetails search={search} lyric={lyric} bio={bio}/>}
                                </>}/>

                                <Route end path='/cancion/:id' element={<SongPages mySongs={mySongs}/>}/>

                                <Route path="*" element={<><h2>Error 404</h2><p>Not Found</p></>}/>
                            </Routes>
                        
                        </>}/>
                    </Routes>
            </HashRouter>
        </div>
    )
}

export default SongSearch