import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
    let {name, constellation, id} = el;
    let navigate = useNavigate();

    const handlerEdit = () => {
        setDataToEdit(el);
        navigate(`/santos/editar/${id}`);
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button onClick={handlerEdit}>Editar</button>
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default CrudTableRow;
