
import React, { useState } from 'react';
import axios from 'axios';


// Define os tipos para os dados do formulário
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}



const Registration = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Função para lidar com a mudança nos campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // Validação básica
    if (!name || !email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Validação simples de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    //console.log('Cadastro realizado com os dados:', formData);
    setError(null); // Limpa o erro se houver



    try {

      const DataNew = {
        Nome:formData.name,
        Email:formData.email,
        Senha:formData.password
      }
  
      const response = await axios.post('http://localhost:3000/users/registrar', DataNew);
      

      if (response.status === 201) {
        setSuccess('Cadastro realizado com sucesso!');
        setFormData({ name: '', email: '', password: '' }); // Limpa os campos do formulário
      }
    } catch (error) {
      console.log(error)
   
      setError('Erro ao cadastrar. Tente novamente mais tarde.');
    }
  };




  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Cadastro</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'red' }}>{success}</p>}

      <div style={inputContainerStyle}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      <div style={inputContainerStyle}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      <div style={inputContainerStyle}>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      <button type="submit" style={buttonStyle}>Cadastrar</button>
    </form>
  ) 
}

// Estilos inline (opcional)
const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: '0 auto',
};

const inputContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '15px',
};

const inputStyle: React.CSSProperties = {
  padding: '8px',
  fontSize: '16px',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default Registration