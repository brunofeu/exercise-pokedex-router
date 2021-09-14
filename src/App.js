import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter } from 'react-router-dom';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> Pokedex </h1>
        <Content/>
        <Pokedex pokemons={pokemons} />
      </BrowserRouter>
    </div>
  );
}

export default App;