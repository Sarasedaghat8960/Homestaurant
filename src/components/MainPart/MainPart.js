import styles from './MainPart.module.scss'
import {React,useState} from 'react'
import YouTubeImg from '../../image/youtube.png'
import {GiKnifeFork} from 'react-icons/gi'
import { FaRegHandPointRight } from "react-icons/fa";
import {SiIfood} from 'react-icons/si';

export default function MainPart({title,image,instruction,youtube}) {
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

    </>
    )
  }