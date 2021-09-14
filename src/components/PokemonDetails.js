import React from 'react'

class PokemonDetails extends React.Component {
  render() {
    const { params } = this.props.match
    const {name, type, averageWeight, image, id, summary, foundAt} = this.props.pokemon;
    return (
      <div className="pokemon">
        {params.id}
        <div>
        <p>xablau</p>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
      </div>
    );
  }
}

export default PokemonDetails
