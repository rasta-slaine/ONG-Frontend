
import  "../style/ContactSection.css"


const ContactSection = () => {
  return (
    <div className='Contact-section'>
        <div className='Contact-section-part-1'>
            <div>
                <h2>Entre em contato</h2>
                <p>Quer saber mais sobre os nossos projetos e ações socias</p>
            </div>
        </div>
        <div className='Contact-section-part-2'> 
            <form>
                <input type="text"  name="name"   id="name"   placeholder='Nome Completo..'/>
                <input type="email" name="email"  id="email"  placeholder='Email...'/>
                <input type='tel'   name="tel"    id="tel"    placeholder='Telefone..'/>

                <textarea name="mensagem" id="mensagem" placeholder='Nos Escreva uma mensagem'></textarea>
                <button type="submit" className="btn-send">Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default ContactSection