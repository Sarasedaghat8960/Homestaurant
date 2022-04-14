import { useState,useEffect } from "react";
import React from 'react'
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import styles from './Pages.module.scss'
import FrenchMeals from "../components/FrenchMeals/FrenchMeals";
import Footer from "../components/Footer/Footer";
 function French() {
     const APIFrench =`http://www.themealdb.com/api/json/v1/1/filter.php?a=French`
     console.log('API French',APIFrench);
    const [frenchMeals, setFrenchMeals] = useState([]);
    

  
    async function getItalMeal() {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=French');
        const dataFre = await res.json();
        console.log('ItalMeals',dataItal);
        setFrenchMeals(dataFre.meals);
       
      }
      useEffect(() => {
        getItalMeal();
      
      },[]);
       console.log('French Meals ',ItalMeals);

  return (
    <div>
      <Header/>
      <Menu/>
       <div className={styles.receipts}>
            {ItalMeals.map((recipe) => (
              <FrenchMeals
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
export default French;