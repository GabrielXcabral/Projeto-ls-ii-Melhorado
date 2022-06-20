import { useEffect, useRef } from "react";

import Criarcard from "./Criarcard";
//import data from "../models/objetos";
import CardForm from "./CardForm";

import api from "../services/api";
import { useObjeto } from "../contextos/ObjetosContext";


function App() {
  
  const { objetos, setObjetos,  handleClose} = useObjeto(); //Trazendo referências armazenadas no ObjetosContext.jsx
  
  const buttonAdd = useRef(null); //criando uma referencia para o botão que adiciona
  
  const carregaEvento = () => { //Tratando a adição de novos objetos ao clicar no botão 
    handleClose();

    buttonAdd.current.blur();
  };

  useEffect(() => {
    const carregarCards = async() => {
      const data = await api.readAll();

      setObjetos([...objetos, ...data]);

    };

    carregarCards();
  }, []); // Retornando objetos da api


  return (
    <body>
      <header>
        <h1 className="heading">Animes Artes</h1>
      </header>


      <main>
        <section className="leading">
          <p className="leading-bigtext">AnimeX</p>
          <p className="leading-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
        </section>

        <button id="tt" 
         className="btn btn-secondary" 
         type="button" 
         data-bs-toggle="offcanvas" 
         data-bs-target="#offcanvasRight" 
         aria-controls="offcanvasRight"
         onClick={carregaEvento}
         ref={buttonAdd}>
        <i class="bi bi-three-dots"></i>
        </button>

        <section id="cards">
          {objetos.map((objetos) => {
            return <Criarcard titulo={objetos.titulo} imagem={objetos.imagem} comentario={objetos.comentario} key={objetos.id} /> // Percorre o array objetos
          })}        
        </section>

        <CardForm />
      </main>
    </body>  
  );
}

export default App