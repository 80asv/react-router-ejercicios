import React, { useState, useEffect } from 'react';

const SongForm = ({ handleSearch, handlerSaveSong }) => {

    const initialForm = {
        artist: "",
        song: ""
    }

    const [form, setForm] = useState(initialForm);

    // el boton permanece inhabilitado hasta que se haga una busca
    const [isDisable, setIsDisable] = useState(true);

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!form.artist || !form.song){
            alert("Please enter a artist name and song name");
            setIsDisable(true);
            return;
        }
        handleSearch(form);
        setForm(initialForm);
        setIsDisable(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="artist" placeholder='Nombre del Interprete' onChange={handleChange} value={form.artist}/>
                <input type="text" name="song" placeholder='Nombre de la canción' onChange={handleChange} value={form.song}/>
                <input type="submit" value="Enviar" />
                <input type="button" value="Guardar en favoritos" onClick={handlerSaveSong} disabled={isDisable && "disabled"}/>
            </form>
        </div>
    )
}

export default SongForm;