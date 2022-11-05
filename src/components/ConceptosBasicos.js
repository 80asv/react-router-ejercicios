import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Productos from '../pages/Productos';
import ReactTopics from '../pages/ReactTopics';
import Usuario from '../pages/Usuario';
import Menu from './Menu';
import PrivateRoute from './PrivateRoute';

const Home = () => {
    return (
      <>
        <main>
          <h2>Welcome to the Homepage!</h2>
          <p>You can do this, I believe in you</p>
        </main>
      </>
    );
};

const About = () => {
    return (
      <>
        <main>
          <h2>Acerda de</h2>
          <p>Esta en la pagina de acerda de</p>
        </main>
        <nav>
          <Link to="/">Volver a home</Link>
        </nav>
      </>
    );
};

const Contact = () => {
    return (
      <>
        <main>
          <h2>Contacto</h2>
          <p>Esta en la pagina de CONTACTO</p>
        </main>
        <nav>
          <Link to="/">Volver a home</Link>
        </nav>
      </>
    );
};

const Error404 = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Not Found</p>
    </div>
  )
}

const ConceptosBasicos = () => {
    return (
        <div>
            <h2>Basic Concepts</h2>
            <Router>
            <Menu/>

                <Routes>
                    <Route end path="/" element={<Home/>}/>
                    <Route end path="/about" element={<About/>} />
                    <Route end path="/contact" element={<Contact/>} />
                    <Route end path="/*" element={<Error404/>} />
                    <Route end path="/usuarios/:username" element={<Usuario/>} />
                    <Route end path="/productos" element={<Productos/>} />

                    <Route end path="/informacion" element={
                        <Navigate to="/contact"/>
                    }/>
                    <Route end path="/ubicacion" element={
                        <Navigate to="/about"/>
                    }/>

                    <Route path='/react/*' element={<ReactTopics />}>
                        <Route path='jsx' element={<p>Este es el tema JSX</p>}/>
                        <Route path='estado' element={<p>Este es el tema Estado</p>}/>
                        <Route path='componentes' element={<p>Este es el tema Componentes</p>}/>
                        <Route path='props' element={<p>Este es el tema Props</p>}/>
                    </ Route>


                    <Route end path='/login' element={<Login/>}/>
                    
                    {/* Ruta privada */}
                    <Route end path="/dashboard" element={<PrivateRoute end element={<Dashboard/>}/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default ConceptosBasicos;