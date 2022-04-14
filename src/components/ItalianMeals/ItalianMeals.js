import styles from './ItalianMeals.module.scss'
import React, { useEffect, useState } from 'react'
import { uuid } from 'uuidv4'
import YouTubeImg from '../../image/youtube.png'
import {GiKnifeFork} from 'react-icons/gi'
import { FaRegHandPointRight } from "react-icons/fa";
import {SiIfood} from 'react-icons/si';
export default function ItalianMeals({title,image,id}) {
 
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
        <h1  className={styles.mealTitle}><SiIfood/> {title}</h1>
        
       {!readMore ?
        <p><GiKnifeFork/> {instruction.substring(0,100)+"..."}</p>
      :
        <p><GiKnifeFork/> { completeContent}</p> 
      }
     <a  onClick={()=>{setReadMore(!readMore)}}><h2 className={styles.readMoreLink}>{linkName}</h2></a>
     <div className={styles.youtubeContainer}>
         <div className={styles.youtubeText}>
            <p>Click  to watch recipe video <FaRegHandPointRight/> </p> 
           
          
         </div>
         <div className={styles.youtubeImage}>
         
            <a href={youtube}><img src={YouTubeImg} alt='Youtube'/></a>
         </div>
     </div>
        
        
         
      </div>
   </div>

    </section>
    
  )
}
