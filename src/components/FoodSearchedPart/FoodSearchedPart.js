import styles from './FoodSearchedPart.module.scss'
import {React,useState} from 'react'
import {GiKnifeFork} from 'react-icons/gi'
import {FaYoutube } from "react-icons/fa";
import {SiIfood} from 'react-icons/si';
//Function for showing information after search with the food name 
export default function FoodSearchedPart({title,image,instruction,youtube}) {
  const [readMore,setReadMore]=useState(false);
  const completeContent=<div>
      <p className="extra-content">
        {instruction.substring(0,100000)}
      </p>
      </div>
      const linkName=readMore?'Read Less << ':'Read More >> '
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
