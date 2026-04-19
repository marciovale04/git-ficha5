import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    // Preenchemos o espaço em branco com uma string de detalhe
    const detalhe = 'Esta é a sinopse do meu filme favorito.'; 
    
    return (
      <div>
        <h1>Lista de Filmes - Props</h1>
        {/* Passamos o título e o valor (detalhe) para o componente Detalhe */}
        <Detalhe title='O Hobbit' value={detalhe} />
      </div>
    );
  }
}

// O componente Detalhe recebe o objeto 'props'
function Detalhe(props) {
  return <p>{ props.value }</p>;
}

export default MovieList;