import React, {useEffect,useState} from 'react';
import './assets/estilo.css';

export default function App(){
  const[nutri,setNutri] = useState([]);

  useEffect(()=>{
    function carregarDados(){
      let url ='https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
      .then((r) => r.json())
      .then((json) =>{
        setNutri(json);
      })
    }

    carregarDados();
  },[]);

  return(
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) =>{
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa"></img>
            <p className="subtitulo">
              {item.subtitulo}
              </p>
            <a className="botao">Acessar</a> 
          </article>
        );
            })};
    </div>

  );
}