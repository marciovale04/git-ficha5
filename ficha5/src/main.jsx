import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Importa o componente que usa Props (Exercício 5)
import MovieList from './Components/Movies2.jsx' 

// Usa o ID 'raiz' que corrigiste no Exercício 2.4
createRoot(document.getElementById('raiz')).render(
  <StrictMode>
    <MovieList /> 
  </StrictMode>,
)