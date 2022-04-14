import { useState,useEffect } from "react";
import React from 'react'
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import styles from './Pages.module.scss'
import ThaiMeals from "../components/ThaiMeals/ThaiMeals";
import Footer from "../components/Footer/Footer";
 function Thai() {
     const APIThai =`http://www.themealdb.com/api/json/v1/1/filter.php?a=Thai`
     console.log('API Thai',APIThai);
    const [thaiMeals, setThaiMeals] = useState([]);
    

  
    async function getItalMeal() {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Thai');
        const dataThai = await res.json();
        console.log('ItalMeals',dataThai);
        setThaiMeals(dataThai.meals);
        
      }
      useEffect(() => {
        getItalMeal();
      
      },[]);
       console.log('Thai Meals ',thaiMeals);

  return (
    <div>
      <Header/>
      <Menu/>
       <div className={styles.receipts}>
            {thaiMeals.map((recipe) => (
              <ThaiMeals
                title={recipe.strMeal}
                image={recipe.strMealThumb}
               id={recipe.idMeal}
               key={recipe.idMeal}
              />
            ))}
          </div>
          <Footer/>
       </div>
    
  )
}
export default Thai;