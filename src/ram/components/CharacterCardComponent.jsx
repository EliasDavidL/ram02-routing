import React from 'react'

export const CharacterCardComponent = ({image, name}) => {
  return (
    <li>
      <img src={ image } alt={ name } />
      <span>{ name }</span>
    </li>
  )
}


