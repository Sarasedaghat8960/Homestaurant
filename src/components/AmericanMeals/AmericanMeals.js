import styles from './AmericanMeals.module.scss'
import React, { useEffect, useState } from 'react'
import {GiKnifeFork} from 'react-icons/gi'
import {SiIfood} from 'react-icons/si';
import {FaYoutube } from "react-icons/fa";

//Function for showing american meals part 
export default function AmericanMeals({title,image,id}) {
 
  const [instruction,setInstruction]=useState("")
  const [youtube,setYoutube]=useState("")
  const [readMore,setReadMore]=useState(false);
  const completeContent=<div>
      <p className="extra-content">
        {instruction.substring(0,100000)}
      </p>
      </div>
  const linkName=readMore?'Read Less << ':'Read More >> '
  const API=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
 
  //Fetch Data with Id to show instruction and youtube
  useEffect(()=>{
    fetch(API)
    .then(res=>res.json())
    .then(result=>{
     setInstruction(result.meals[0].strInstructions)
     setYoutube(result.meals[0].strYoutube)
    })
  },[API])
  return (
    <section className={styles.container} >
      <div className={styles.meal}>
        <div className={styles.mealImage} >
          <img src={image} alt='receipt' />
        </div>
        <div className={styles.mealDetails}>
            <h1  className={styles.mealTitle}><SiIfood/> {title}</h1>
    {/* Showing complete instruction or less instruction */}
            {!readMore ?
              <p><GiKnifeFork/> {instruction.substring(0,100)+"..."}</p>
            :
              <p><GiKnifeFork/> { completeContent}</p> 
            }
          <h2 onClick={()=>{setReadMore(!readMore)}} className={styles.readMoreLink}>{linkName}</h2>
            <div className={styles.youtubeContainer}>
          <a href={youtube}> 
              <p>Click  to watch recipe video </p>
              <FaYoutube/> 
          </a>
     </div>
        </div>
       </div>
    </section>
  )
}
