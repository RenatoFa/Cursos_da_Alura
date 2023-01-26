import React, { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'
import ListaCategoria from '../components/ListaCategoria'
import ListaPost from '../components/ListaPost'
import SubCategoria from './SubCategorias'

const Categoria = () => {
  const { id } = useParams()
  const { pathname } = useLocation()
  console.log(pathname)
  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias)
    })
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategoria />
      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => (
          <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
            <Link to={`${pathname}/${subcategoria}`}>
              {subcategoria}
            </Link>
          </li>
        ))}
      </ul>
      <SubCategoria />
      <ListaPost url={`/posts?categoria=${id}`} />
    </>
  )

}

export default Categoria