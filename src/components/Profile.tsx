
import React, { useState, useEffect} from 'react';
import axios from 'axios';


function Profile() {
  const[loading, SetLoading] = useState<string | null>(null);
  const[ApiData, SetApiData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const[nome, SetNome] = useState<string | null>(null);



  const token = JSON.parse(localStorage.getItem('token') || 'null')

  const fechData = async ()=>{

    const headers =  {
      Authorization:  `Bearer ${token}`
    }


    try {

      const response = await axios.post('http://localhost:3000/users/profile', {}, {headers});
      
      if (response.status === 201) {
        SetLoading('Login realizado com sucesso!');
        SetApiData(response.data)
        SetNome( response.data?.data.Nome )
      }
    } catch (error) {
      console.log(error)
      setError('Erro ao cadastrar. Tente novamente mais tarde.');
    }

  }
 

useEffect(()=>{
  fechData()
},[])


  return (
    <div>
       {error && <p style={{ color: 'red' }}>{error}</p>}
       {loading && <p style={{ color: 'green' }}>{loading}</p>}
      <p>Hello { nome  || 'usuario'}  </p>
    </div>
  )
}

export default Profile