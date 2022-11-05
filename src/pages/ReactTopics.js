import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

const ReactTopics = () => {



    return (
        <div>
            <h2>React Topics</h2>
            <ul>
                <li>
                    <Link to="jsx" >JSX</Link>
                </li>
                <li>
                    <Link to="props" >Props</Link>
                </li>
                <li>
                    <Link to="estado" >Estado</Link>
                </li>
                <li>
                    <Link to="componentes" >Componentes</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default ReactTopics