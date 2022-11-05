import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <ol>
        <li>
            <h4>Componente NavLink</h4>
            <NavLink end to="/" activeclassname="active">Home</NavLink>
            <NavLink end to="/about" activeclassname="active">About</NavLink>
            <NavLink end to="/contact" activeclassname="active">Contact</NavLink>
        </li>
        <br />
        <li>
            <h4>Componente Link</h4>
            <Link end to="/">Home</Link>
            <Link end to="/about">About</Link>
            <Link end to="/contact">Contact</Link>
        </li>
        <li>
            <h4>Parametros por consulta</h4>
            <Link end to="/productos">productos</Link>
        </li>
        <li>
            <h4>Redirecciones</h4>
            <Link end to="/informacion">informacion</Link>
            <Link end to="/ubicacion">Ubicacion</Link>
        </li>
        <li>
            <h4>Ruta anidadas</h4>
            <Link end to="/react">React Documentation</Link>
        </li>
        <hr />

        <li>
            <h4>Rutas Privadas</h4>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">dashboard</Link>
        </li>
    </ol>
  )
}

export default Menu;
