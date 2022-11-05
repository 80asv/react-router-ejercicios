import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Productos = () => {

    let { search } = useLocation();
    let query = new URLSearchParams(search);
    let navigate = useNavigate();

    // creando parametro de consulta
    const LIMIT = 20;
    let start = parseInt(query.get('inicio')) || 1;
    let end = parseInt(query.get('fin')) || LIMIT;


    const handlerNext = () => {
        navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
    }
    
    const handlerPrev = () => {
        navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
    }

    // usando useHisotory para manipular los parametros con los botones
    
        
    return (
        <div>
            <h3>Productos</h3>
            <p>Mostrando producto del <b>{start}</b> al <b>{end}</b> </p>
            { start > LIMIT && <button onClick={handlerPrev}>Atras</button>}
            <button onClick={handlerNext}>Adelante</button>
        </div>
    )
}

export default Productos