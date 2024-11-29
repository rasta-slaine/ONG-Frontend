import  "../style/ContactPage.css"



const ContactPage = () => {
  return (
    <div className="contact-page-container">

    <header className="contact-page-header">
      <h3>Entre em Contato Conosco</h3>
      <p>Estamos aqui para ouvir você! Preencha o formulário abaixo ou entre em contato diretamente pelos nossos canais.</p>
    </header>

    <main className="contact-page-main">
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" placeholder="Seu nome completo" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Seu email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" rows={5} placeholder="Sua mensagem" required></textarea>
        </div>
        <button type="submit" className="contact-button">
          Enviar Mensagem
        </button>
      </form>

      <aside className="contact-info">
        <h4>Informações de Contato</h4>
        <p>Email: <a href="mailto:contato@ongexemplo.org">contato@ongexemplo.org</a></p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Endereço: Rua Solidariedade, 123 - São Paulo, SP</p>
      </aside>

    </main>

    <footer className="contact-page-footer">
      <p>Obrigado por entrar em contato! 💙</p>
    </footer>
  </div>
  )
}

export default ContactPage