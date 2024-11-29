
import  "../style/Blog.css"
import posts, { Post } from "../assets/Posts";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";



const Blog = () => {

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
            posts.slice(0,visiblePosts).map((post:Post) =>(
            <div className='blog-container-main' key={post.id}>
                <div>
                    <img className="blog-img" src={post.img} alt="" />
                </div>
                <div>
                    <h2>{post.title}</h2>
                </div>
                <div>
                    <p>{post.texto.slice(0,330)}....</p>
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

     {visiblePosts < posts.length && !loading && (
        <button className="btn-load" onClick={handleLoadMore}>Carregar Mais</button>
      )}
      {loading && <div className="loading-spinner"></div>}
      {visiblePosts > 2 && (
        <button className="btn-load" onClick={handleLoadLess}>Carregar Menos</button>
      )}
    </div>
  )
}

export default Blog