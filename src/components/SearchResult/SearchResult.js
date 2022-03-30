import styles from './SearchResult.module.scss'
import React from 'react'
import { uuid } from 'uuidv4'

export default function SearchResult({title,image}) {
  return (
    <>
    <div className={styles.searchResult}>
      <h1 >{title}</h1>
      {console.log(title)}
      <ol>
        {/* {ingredients.map(ingredient=>(<li >{ingredient.text}</li>))} */}
      </ol>
      <img src={image} alt=''/>
    </div>
    
    </>
    
  )
}
