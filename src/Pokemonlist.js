import React from 'react'

export default function Pokemonlist({pokemon}) 
{
  return (
    <div>{pokemon.map(p => (
        //put key when some form of loop in code
        <div key={p}>{p}</div>
    ))}</div>
  )
}
