
import  "../style/BlogLayoutSection.css"
import posts from '../assets/Posts.ts'
import { Link } from "react-router-dom";


type PostType = {
    id: number;
    img: string;
    title: string;
    texto: string;
  };



const BlogLayoutSection = () => {


  return (
    <div>
          <h2 className="Blog-title">Confira As Novidades </h2>
        <div className="">
              
                  <div className="bloglayout-container">
                      {/* Renderizar o primeiro post */}
                                {posts.map((p: PostType,i) => (
                                <div className={`grid-item-${i + 1}`} key={p.id}>
                                <div>
                                    <h2>{p.title}</h2>
                                </div>                                  
                                <div>
                                    <img src={p.img} alt={p.title} />
                                </div>
                                <div>
                                    <p>{p.texto.slice(0,50).concat('...')}</p>
                                </div>    
                                <div>
                                    {//<p>{p.texto}</p>
                                    }
                                    <Link to={`/blog/posts/${p.id}`}
                                        state={{post:p}} 
                                        key={p.id} 
                                    >
                                        <button className="btn-load-more">Ver Materia</button>
                                    </Link>
                                </div>
                                </div>
                            ))}
                  </div>

            </div>
    </div>

  )
}


export default BlogLayoutSection

