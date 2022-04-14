import { useState,useEffect } from "react";
import React from 'react'
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import styles from './Pages.module.scss'
import ItalianMeals from "../components/ItalianMeals/ItalianMeals";
import Footer from "../components/Footer/Footer";
 function Italian() {
     const APIITALIAN =`http://www.themealdb.com/api/json/v1/1/filter.php?a=Italian`
     console.log('API Italian',APIITALIAN);
    const [italMeals, setItalMeals] = useState([]);
    

  
    async function getItalMeal() {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian');
        const dataItal = await res.json();
        console.log('ItalMeals',dataItal);
        setItalMeals(dataItal.meals);
       
      }
      useEffect(() => {
        getItalMeal();
      
      },[]);
       console.log('Italian Meals ',italMeals);

  return (
    <div>
      <Header/>
      <Menu/>
       <div className={styles.receipts}>
            {ItalMeals.map((recipe) => (
              <ItalianMeals
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
export default Italian;