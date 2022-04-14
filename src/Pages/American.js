import { useState,useEffect } from "react";
import React from 'react'
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import styles from './Pages.module.scss'
import AmericanMeals from "../components/AmericanMeals/AmericanMeals";
import Footer from "../components/Footer/Footer";
 function American() {
     const APIAmerican =`http://www.themealdb.com/api/json/v1/1/filter.php?a=American`
     console.log('API American',APIAmerican);
    const [amerMeals, setAmerMeals] = useState([]);
    

  
    async function getItalMeal() {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=American');
        const dataAmer = await res.json();
        console.log('ItalMeals',dataItal);
        setAmerMeals(dataAmer.meals);
       
      }
      useEffect(() => {
        getItalMeal();
      
      },[]);
       console.log('American Meals ',ItalMeals);

  return (
    <div>
      <Header/>
      <Menu/>
       <div className={styles.receipts}>
            {ItalMeals.map((recipe) => (
              <AmericanMeals
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
export default American;