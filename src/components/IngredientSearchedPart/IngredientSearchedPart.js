import styles from './IngredientSearchedPart.module.scss'
import React, { useEffect, useState } from 'react'
import { uuid } from 'uuidv4'
export default function IngredientSearchedPart({title,image,id}) {
 
  const [instruction,setInstruction]=useState("")
  const [youtube,setYoutube]=useState("")
  const API=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  console.log(API);
  useEffect(()=>{
    fetch(API)
    .then(res=>res.json())
    .then(result=>{
      // console.log(result.meals[0]);

     setInstruction(result.meals[0].strInstructions)
     setYoutube(result.meals[0].strYoutube)
    })
  },[id])
  return (
    <section className={styles.container} >
    <div className={styles.meal}>
    <div className={styles.mealImage} >
     <img src={image} alt='receipt Image' />
     </div>
      <div className={styles.mealDetails}>
        <h1  className={styles.mealTitle}>{title}</h1>

       {/* <p>{id}</p> */}
      
             <p>{instruction.substring(0,100)+"..."} </p>   
              <a href={youtube}>Watch Film</a> 
      
      </div>
     </div>

    </section>
    
  )
}
