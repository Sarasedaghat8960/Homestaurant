import styles from './UserSearchedPart.module.scss'
import React, { useEffect, useState } from 'react'
import { uuid } from 'uuidv4'
export default function UserSearchedPart({title,image,id}) {
 const [mealDetail,setMealDetail]=useState([])
  const API=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  console.log(API);
  useEffect(()=>{
    fetch(API)
    .then(res=>res.json())
    .then(result=>{
      console.log(result.meals[0]);
     setMealDetail(result.meals[0])
    })
  },[id])
  return (
    <section className={styles.container1} >
    <div className={styles.meal1}>
    <div className={styles.mealImage1} >
     <img src={image} alt='receipt Image' />
     </div>
      <div className={styles.mealDetails1}>
        <h1  className={styles.mealTitle1}>{title}</h1>

       <p>{id}</p>
        
             {/* {mealDetail.strInstructions.substring(0,100)+"..."}    */}
           {/* <a href={mealDetail.strYoutube}>See youtube</a>  */}
      
      </div>
     </div>

    </section>
    
  )
}
