import styles from './FoodSearchedPart.module.scss'
import React from 'react'

//Function for showing information after search with the food name 
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
          <a href={youtube}>Watch youtube</a>
        </div>
      

      </div>

    </section>
    
  )
}
