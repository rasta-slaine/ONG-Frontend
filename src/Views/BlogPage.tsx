
import React, { useState } from 'react';
import  "../style/Blog.css"
import Post from '../assets/Posts.js'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

type Props = {}

const Blog = (props: Props) => {

    const [visiblePosts, setVisiblePosts] = useState(2); // Inicialmente, 2 posts visíveis
    const [loading, setLoading] = useState(false);

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 2); // carrega 2 post
            setLoading(false);
          }, 1000);
    };

    const handleLoadLess = () => {
        setVisiblePosts(prevVisiblePosts => Math.max(prevVisiblePosts - 2, 2)); // Tira 2 posts
      };

  return (
    <div className='blog-container'>

        {
            Post.slice(0,visiblePosts).map(post =>(
            <div className='blog-container-main' key={post.id}>
                <div>
                    <img className="blog-img" src={post.img} alt="" />
                </div>
                <div>
                    <h2>{post.title}</h2>
                </div>
                <div>
                    <p>{post.texto.slice(0,330).concat('....')}</p>
                </div>
                <div>
                    <Link to={`/blog/posts/${post.id}`}
                    state={{post:post}}
                    key={post.id}
                    className='blog-container-main-link'
                    >Leia mais <FontAwesomeIcon icon={faArrowAltCircleRight} /> </Link>  
                </div>
            </div>
            ))}

        {
         visiblePosts < Post.length && !loading && ( // Exibe o botão "Carregar Mais" apenas se houver mais posts
            <button className='btn-load' onClick={handleLoadMore}>Carregar Mais</button>)
      }
         {loading && <p>Carregando...</p>} {/* Mensagem de carregamento */}

         {
          visiblePosts > 2 && ( // Exibe o botão "Voltar" se houver mais de 2 posts visíveis
             <button className='btn-load' onClick={handleLoadLess}>Carregar Menos</button>
      )}   
    </div>
  )
}

export default Blog