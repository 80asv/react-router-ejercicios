import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const initialForm = {
    id: null,
    name: "",
    constellation: ""
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

    const [form, setForm] = useState(initialForm);
    let navigate = useNavigate();

    useEffect(() => {
      if(dataToEdit){
        setForm(dataToEdit);
      } else {
        setForm(initialForm);
      }
    }, [dataToEdit])
    

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!form.name || !form.constellation){
            alert("Datos incompletos"); return;
        }
            
        if(form.id === null){
            createData(form);
        } else {
            updateData(form);
        }

        handleReset();
        // al momento de enviar el form no regresa al Home
        navigate("/santos");
    }
    
    const handleReset = e => {
        setForm(initialForm);
        setDataToEdit(null);
    }

    return(
        <div>
            <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange}  value={form.name}/>
                <input type="text" name="constellation" placeholder="Constelacion" onChange={handleChange} value={form.constellation}/>
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpia" onClick={handleReset}/>
            </form>
        </div>
    )
}

export default CrudForm;