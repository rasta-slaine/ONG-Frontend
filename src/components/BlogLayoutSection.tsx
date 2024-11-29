
import  "../style/BlogLayoutSection.css"
import Post from '../assets/Posts.js'
import { Link } from "react-router-dom";


type PostType = {
    id: number;
    img: string;
    title: string;
    texto: string;
  };

type Props = {}

const BlogLayoutSection = (props: Props) => {


  return (
    <div>
          <h2 className="Blog-title">Confira As Novidades </h2>
        <div className="">
              
                  <div className="bloglayout-container">
                      {/* Renderizar o primeiro post */}
                                {Post.map((p: PostType,i) => (
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

/*
                      /* Renderizar o primeiro post 
                      {Post.slice(0, 1).map((p: PostType) => (
                        <div className="grid-item-1" key={p.id}>
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
                                <button>Ver Materia</button>
                            </Link>
                        </div>
                        </div>
                    ))}

              {/* Renderizar outros posts dinamicamente 
              {Post.slice(1, 5).map((p: PostType, index) => (
                <div className={`grid-item-${index + 2}`} key={p.id}>
                  <div>
                    <img src={p.img} alt={p.title} />
                  </div>
                  <div>
                    <h2>{p.title}</h2>
                  </div>
                  <div>
                            {//<p>{p.texto}</p>
                            } 
                            <Link to={`/blog/posts/${p.id}`}
                                state={{post:p}} 
                                key={p.id} 
                            >
                                <button>Ver Materia</button>
                            </Link>
                  </div>
                </div>
              ))}
*/