import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails'
import Pokedex from './Pokedex'

function Content() {
  return (
    <div>
      <Switch>

      {/* <Route path="/" component={Pokedex} /> */}
      <Route path="/pokemon/:id" component={PokemonDetails} />
      </Switch>

    </div>
  )
}

export default Content
