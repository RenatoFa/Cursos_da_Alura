import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../assets/css/post.css'
import { busca } from '../api/api';


const Post = () => {
  const { id } = useParams()
  let navigate = useNavigate()
  const [post, setPosts] = useState({});

  useEffect(() => {
    busca(`/posts/${id}`, setPosts)
      .catch(() => {
        navigate('/404')
      })
  }, [id, navigate]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main >
  )
}

export default Post