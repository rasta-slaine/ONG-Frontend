
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// Define os tipos para os dados do formulário
interface LoginFormData {
  email: string;
  password: string;
}


const Login = () => {
    const navigate = useNavigate()

    // Estado para armazenar os valores do formulário
    const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });
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
      const { email, password } = formData;
  
      // Validação básica
      if (!email || !password) {
        setError('Por favor, preencha todos os campos.');
        return;
      }
  
      // Simulação de uma requisição de login
      //console.log('Login data:', formData);
      setError(null); // Limpa o erro se houver
  
      try {

        const DataNew = {
          Email:formData.email,
          Senha:formData.password
        }
       
        
        const response = await axios.post('http://localhost:3000/users/login', DataNew);
        
  
        if (response.status === 201) {
          setSuccess('Login realizado com sucesso!');
          setFormData({  email: '', password: '' }); // Limpa os campos do formulário
          localStorage.setItem("token",JSON.stringify(response.data.token))
          navigate("/profile")
        }
      } catch (error) {
        console.log(error)
        setError('Erro ao cadastrar. Tente novamente mais tarde.');
      }

    };


  return (
    <div>
          <form onSubmit={handleSubmit} style={formStyle}>
                <h2>Login</h2>
                
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'red' }}>{success}</p>}

                <div style={inputContainerStyle}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
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
                  />
                </div>

                <button type="submit" style={buttonStyle}>Entrar</button>
              </form>'

    </div>
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


export default Login