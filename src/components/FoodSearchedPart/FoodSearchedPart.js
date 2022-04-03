import styles from './FoodSearchedPart.module.scss'
import React from 'react'
import { uuid } from 'uuidv4'

export default function FoodSearchedPart({title,image,instruction,youtube}) {
  return (
    <section className={styles.container} >
    <div className={styles.meal}>
    <div className={styles.mealImage} >
     <img src={image} alt='receipt Image' />
     </div>
      <div className={styles.mealDetails}>
        <h1  className={styles.mealTitle}>{title}</h1>
       
         <p>{instruction.substring(0,100)+"..."}</p>
         <a href={youtube}>See youtube</a>
      </div>
     

    </div>

    </section>
    
  )
}
