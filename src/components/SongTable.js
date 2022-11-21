import React from 'react'
import SongTableRow from './SongTableRow'

const SongTable = ({ mySongs, handlerDeleteSong }) => {
  return (
    <div>
        <h3>Mis caciones Favoritas</h3>
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Artista</th>
                    <th>Cancion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    mySongs.length > 0 
                    
                    ? mySongs.map(
                        (el, index) => <SongTableRow key={index} el={el} id={index} handlerDeleteSong={handlerDeleteSong}/>
                    ) 
                    : <tr><td colSpan="4">Sin Canciones</td></tr>
                }
            </tbody>
        </table>
    </div>
  )
}

export default SongTable