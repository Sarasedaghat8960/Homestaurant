import styles from './MainPart.module.scss'
import React from 'react'
import { uuid } from 'uuidv4'

export default function MainPart({title,image,ingredients,link}) {
  return (
    <section className={styles.MainPart}>
    <div className={styles.receiptContainer}>
      <div className={styles.receiptText}>
        <h1 >{title}</h1>
        <ol>
          {ingredients.map(ingredient=>(<li >{ingredient.text}</li>))}
        </ol>

      </div>
     <div className={styles.receiptImage}>
     <img src={image} alt='receipt Image' className={styles.image} />
     </div>
     <a href={link}>Click to see more</a>

    </div>

    </section>
    
  )
}
