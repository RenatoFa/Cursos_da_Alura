import React, { useState, useEffect } from "react";
import { busca } from '../api/api';
import '../assets/css/blog.css'
import { Link } from "react-router-dom";

const ListaCategoria = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias`, setCategorias)
  }, []);

  return (
    <ul className="lista-categorias container flex">
      {
        categorias.map((categoria) => (
          <Link to={`/categoria/${categoria.id}`} key={categoria.id}>
            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
              {categoria.nome}
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default ListaCategoria