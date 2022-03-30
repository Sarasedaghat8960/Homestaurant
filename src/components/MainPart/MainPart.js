import styles from './MainPart.module.scss'
import React from 'react'
import { uuid } from 'uuidv4'

export default function MainPart({title,image,ingredients}) {
  return (
    <>
    <div>
      <h1 >{title}</h1>
      <ol>
        {ingredients.map(ingredient=>(<li >{ingredient.text}</li>))}
      </ol>
      <img src={image} alt=''/>
    </div>
    
    </>
    
  )
}
