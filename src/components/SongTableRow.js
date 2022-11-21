import React from 'react'
import { useNavigate } from 'react-router-dom';

const SongTableRow = ({id, el, handlerDeleteSong}) => {

	let { search, bio } = el;
	let avatar = bio.artists[0].strArtistThumb;
	let navigate = useNavigate();

	let avatarStyles = {
		with: "auto",
		height: "40px"
	}
    
	return (
			<tr>
				<td>
					<img style={avatarStyles} src={avatar} alt={search.artist} />
				</td>
				<td>{search.artist}</td>
				<td>{search.song}</td>
				<td>
					<button onClick={() => navigate(`cancion/${id}`)}>Ver</button>
					<button onClick={() => handlerDeleteSong(id)}>eliminar</button>
				</td>
			</tr>
	)
}

export default SongTableRow