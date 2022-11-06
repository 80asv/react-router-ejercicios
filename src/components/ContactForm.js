import React from 'react'
import { useForm } from '../hooks/useForm'
import { Loader } from './Loader'
import { Message } from './Message'

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
};

const validationsForm = (form) => {
    let errors = {}
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexComments = /^.{1,255}$/;

    if(!form.name.trim()){
        errors.name = `El campo 'nombre' es requerido`;
    } else if(!regexName.test(form.name.trim())){
        errors.name = "El campo 'nombre' solo aceptar letras y espacios en blanco";
    } 
    if(!form.email.trim()){
        errors.email = `El campo 'email' es requerido`;
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = `Tiene que ingresar un email valido`;
    }
    if(!form.subject.trim()){
        errors.subject = `El campo 'asunto' es requerido`;
    }
    if(!form.comments.trim()){
        errors.comments = `El campo 'comentarios' es requerido`;
    } else if(!regexComments.test(form.comments.trim())){
        errors.comments = `No puede ingresar mas de 255 caracteres`;
    }

    return errors
}

const ContactForm = () => {

    const {
        form, 
        error, 
        loading, 
        response, 
        handlerChange, 
        handlerBlur, 
        handlerSubmit
    } = useForm(initialForm, validationsForm);

    return (
        <div>
            <h2>Formulario de contacto</h2>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="name" id="name" placeholder='Escribe tu nombre' onChange={handlerChange} value={form.name} onBlur={handlerBlur} required />
                {error.name && <p>{error.name}</p>}
                <input type="text" name="email" id="email" placeholder='Escribe tu email' onChange={handlerChange} value={form.email} onBlur={handlerBlur} required/>
                {error.email && <p>{error.email}</p>}
                <input type="text" name="subject" id="subject" placeholder='Asunto a tratar' onChange={handlerChange} value={form.subject} onBlur={handlerBlur} required/>
                {error.subject && <p>{error.subject}</p>}
                <textarea name="comments" cols="50" rows="5" placeholder='Escribe tus comentarios' onChange={handlerChange} onBlur={handlerBlur} value={form.comments} required></textarea>
                {error.comments && <p>{error.comments}</p>}
                <input type="submit" value="Enviar"/>
                {loading && <Loader/>}
                {response && <Message msg="Formulario enviado con exito" bgColor="#198754"/>}
            </form>
        </div>
    )
}

export default ContactForm