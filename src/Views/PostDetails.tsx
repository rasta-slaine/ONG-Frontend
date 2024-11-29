import  "../style/Post.css"
import { useParams,useLocation } from 'react-router-dom';
import ButtonBackPage from "@/components/ButtonBackPage";



const PostDetails = () => {

    //const { postId } = useParams(); 
    //const post = Post.find(p => p.id === parseInt(postId)); 

    const location = useLocation()
    const data =  location.state || {}
    const post = data.post

    if (!post) { 
      return <h2>Post não encontrado</h2>; // Mensagem se o post não existir
    }


  return (
    <>
        <ButtonBackPage/>
        <div className="post-container">
          <div>
              <img className="post-img" src={post.img} alt="" />
          </div>
          <div>
              <h1 className="post-title">{post.title}</h1>
              <span className=""></span>
          </div>
          <div className="post-text">
              {
            /* post.texto.map((i)=>(
                  <p key={i.id}>{i.texto}</p>
              )) */

                  Array.isArray(post.texto) ? ( // Verifica se post.texto é um array antes de mapear
                    post.texto.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))
                  ) : (
                    <p>{post.texto}</p> // Exibe diretamente se post.texto não for um array
                  )
              }

          </div>
      </div>
    </>

  )
}

export default PostDetails