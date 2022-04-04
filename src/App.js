import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPart from './components/MainPart/MainPart';
import SearchBar from './components/SearchBar/SearchBar';
import {uuid } from 'uuidv4';
import FoodSearchedPart from './components/FoodSearchedPart/FoodSearchedPart';
import IngredientSearchedPart from './components/IngredientSearchedPart/IngredientSearchedPart';
import UserSearchedPart from './components/UserSearchedPart/UserSearchedPart';
function App() {
  const ApplicationID = "ac02a9fd";
  const ApplicationKey = "e6415acd08e580bf7ff0124a0435dfb8"	;
  const [search,setSearch]=useState([""]);
  const [ingredient,setIngredient]=useState("")
  const [user,setUser]=useState("")
  const [receipts,setReceipts]=useState([]);
  const [isFoodSearched,setIsFoodSearched]=useState(false);
  const [isIngredientSearched,setIsIngredientSearched]=useState(false);
  const [isUserSearched,setIsUserSearched]=useState(false);
  
  const [meals,setMeals]= useState([])
  const [mealsWithIngreds,setMealsWithIngreds]= useState([])
  const [mealsWithUsers,setMealsWithUsers]= useState([])
  const ApiUrlFood= `https://api.edamam.com/search?q=chicken&app_id=${ApplicationID}&app_key=${ApplicationKey}&imageSize=SMALL`
 const APIFood=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
 const APIINGRED=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
 const APIUSER=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${user}`
  console.log("ingredient from app",ingredient);
  console.log("APIINGRED",APIINGRED);
  console.log("APIUSER",APIUSER);
  useEffect(()=>{
  //    fetch(ApiUrlFood)
  //  .then(res=>res.json())
  //  .then(result=> {
  //    console.log(result);
  //    setReceipts(result.hits);
  //     })
 //fetch data for searching with food name 
      async function getMeal(){
      const res= await fetch(APIFood);
      const data1= await res.json()
      setMeals(data1.meals);
      }
      getMeal()
  

    },[search])
    
  useEffect(()=>{
  //fetch data for searching with food ingredients 
  async function getIntMeal(){
    const res2=await fetch(APIINGRED);
    const data2=await res2.json();
    console.log("data2",data2);
    setMealsWithIngreds(data2.meals);
  }
  getIntMeal();
},[ingredient])
useEffect(()=>{
  //fetch data for searching with user
  async function getUserMeal(){
    const res3=await fetch(APIUSER);
    const data3=await res3.json();
    console.log("data23",data3);
    setMealsWithUsers(data3.meals);
  }
  getUserMeal();
},[user])

  console.log("Search from app",search);
  console.log("receipt from app",receipts);
  console.log("user from app",user);

 console.log("meals",meals);
 console.log("ingredientsMeal",mealsWithIngreds);
 console.log("usersMeal",mealsWithUsers);

  return ( 
  <div>
    
    <Header/>
    <SearchBar search={search} setSearch={setSearch}  setIsFoodSearched={setIsFoodSearched} setIsIngredientSearched={setIsIngredientSearched} setIngredient={setIngredient} setUser={setUser} setIsUserSearched={setIsUserSearched} />
    
    {(isFoodSearched)?
        <div className='receipts'>
          {meals.map(recipe=>
            <FoodSearchedPart title={recipe.strMeal} image={recipe.strMealThumb} instruction={recipe.strInstructions} youtube={recipe.strYoutube} key={recipe.idMeal}/>
            )}
        </div>
      :<p></p>
      }
     {(isIngredientSearched)?
        <div className='receipts'>
          {mealsWithIngreds.map(recipe=>
            <IngredientSearchedPart title={recipe.strMeal} image={recipe.strMealThumb} id={recipe.idMeal} key={recipe.idMeal}  />
        
          ) }
      </div>
      :
      <p></p>
      } 
     
      {(isUserSearched)?
         <div className='receipts'>
           {mealsWithUsers.map(recipe=>
            <UserSearchedPart title={recipe.strMeal} image={recipe.strMealThumb} id={recipe.idMeal} key={recipe.idMeal}/>
          ) }  
      {/* <p>HELLO from {user}</p>  */}
      </div>
      :
      <p></p>
      } 
      {(!isIngredientSearched && !isFoodSearched && !isUserSearched)?
       <div className='receipts'>
            
               {meals.map(recipe=> 
              <MainPart title={recipe.strMeal} image={recipe.strMealThumb} instruction={recipe.strInstructions} youtube={recipe.strYoutube} key={recipe.idMeal}/>
              )} 
       </div> 
    :
    <p></p>
    }
       
       <Footer/>

</div>
   
  );
}

export default App;