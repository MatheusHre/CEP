import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Info } from './types/info';


function App() {

  const [cep, setCep] = useState<String>('')

  const [infos, setInfos] = useState<Info>()

  const getCep = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => setInfos(resposta.data))
  }
  
  return (
    <div className="App">
      <input type="text" onChange={(event) => setCep(event.target.value)} />
      <button onClick={getCep}>Ver CEP</button>

      <h1> Informações :</h1>
      {
        <>
          <p>{infos?.cep}</p>
          <p>{infos?.localidade}</p>
          <p>{infos?.logradouro}</p>
          <p>{infos?.compemento}</p>
          <p>{infos?.bairro}</p>
          <p>{infos?.ddd}</p>
          <p>{infos?.uf}</p>
          <p>{infos?.gia}</p>
          <p>{infos?.ibge}</p>
          <p>{infos?.siafi}</p>

        </>
      }
    </div>
  );
}

export default App;
