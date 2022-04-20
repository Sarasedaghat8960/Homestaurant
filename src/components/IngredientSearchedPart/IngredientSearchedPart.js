import styles from './IngredientSearchedPart.module.scss'
import React, { useEffect, useState } from 'react'

import {GiKnifeFork} from 'react-icons/gi'
import {FaYoutube } from "react-icons/fa";
import {SiIfood} from 'react-icons/si';
export default function IngredientSearchedPart({title,image,id}) {
  const [readMore,setReadMore]=useState(false);
  
      const linkName=readMore?'Read Less << ':'Read More >> '
  const [instruction,setInstruction]=useState("")
  const [youtube,setYoutube]=useState("")
  const API=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  console.log(API);
  useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res=>res.json())
    .then(result=>{
      // console.log(result.meals[0]);

     setInstruction(result.meals[0].strInstructions)
     setYoutube(result.meals[0].strYoutube)
    })
  },[id])
  const completeContent=<div>
      <p className="extra-content">
        {instruction.substring(0,100000)}
      </p>
      </div>
  return (
    <>
    <section className={styles.container} >
    <div className={styles.meal}>
    <div className={styles.mealImage} >
     <img src={image} alt='receipt' />
     </div>
      <div className={styles.mealDetails}>
        <h1  className={styles.mealTitle}><SiIfood/> {title}</h1>
        
       {!readMore ?
        <p><GiKnifeFork/> {instruction.substring(0,100)+"..."}</p>
      :
        <p><GiKnifeFork/> { completeContent}</p> 
      }
     <h2  onClick={()=>{setReadMore(!readMore)}} className={styles.readMoreLink}>{linkName}</h2>
     <div className={styles.youtubeContainer}>
          <a href={youtube}> 
              <p>Click  to watch recipe video </p>
              <FaYoutube/> 
          </a>
     </div>
     </div>
   </div>
   </section>
 </>
  )
}
