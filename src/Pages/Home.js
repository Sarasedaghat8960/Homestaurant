import { useEffect, useState } from "react";
import "../App.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import MainPart from "../components/MainPart/MainPart";
import SearchBar from "../components/SearchBar/SearchBar";

import FoodSearchedPart from "../components/FoodSearchedPart/FoodSearchedPart";
import IngredientSearchedPart from "../components/IngredientSearchedPart/IngredientSearchedPart";
import UserSearchedPart from "../components/UserSearchedPart/UserSearchedPart";
import styles from './Home.module.scss'
import { SpinnerRoundFilled } from "spinners-react";
function Home() {
  //States 
  const [search, setSearch] = useState([""]);
  const [ingredient, setIngredient] = useState("");
  const [user, setUser] = useState("");
  const [isFoodSearched, setIsFoodSearched] = useState(false);
  const [isIngredientSearched, setIsIngredientSearched] = useState(false);
  const [isUserSearched, setIsUserSearched] = useState(false);
  const [meals, setMeals] = useState([]);
  const [mealsWithIngreds, setMealsWithIngreds] = useState([]);
  const [mealsWithUsers, setMealsWithUsers] = useState([]);
  const [show, setShow] = useState(false);

  const APIINGRED = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const APIUSER = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${user}`;
  console.log("ingredient from app", ingredient);
  console.log("APIINGRED", APIINGRED);
 
  // useEffect for search
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res=>res.json())
    .then(data1=>setMeals(data1.meals))
     setShow(false);
  }, [search]);
  // useEffect for ingredient
  useEffect(() => {
   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
   .then(res=>res.json())
   .then(data2=>  setMealsWithIngreds(data2.meals))
 
    setShow(false);
  }, [ingredient]);
  // useEffect for user
  useEffect(() => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${user}`)
  .then(res=>res.json())
  .then(data3=>  setMealsWithUsers(data3.meals))

    setShow(false);
  }, [user]);
  // useEffect for show
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [show]);
  

  console.log("Search from app", search);

  console.log("user from app", user);
  console.log("APIUSER", APIUSER);
  console.log("meals", meals);
  console.log("ingredientsMeal", mealsWithIngreds);
  console.log("usersMeal", mealsWithUsers);

  return (
    <div>
      <Header />
      <Menu/>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setIsFoodSearched={setIsFoodSearched}
        setIsIngredientSearched={setIsIngredientSearched}
        setIngredient={setIngredient}
        setUser={setUser}
        setIsUserSearched={setIsUserSearched}
      />
      <div className={styles.searchedText}>
        {isFoodSearched ? (
          <h2>
            Search result for food with the word <u>{search}</u> in name
          </h2>
        ) : isIngredientSearched ? (
          <h2>
            Search result for food with the word <u>{ingredient}</u> in
            ingredients
          </h2>
        ) : isUserSearched ? (
          <h2>
            Search result for food with the category of <u>{user}</u>
          </h2>
        ) : (
          <p></p>
        )}
      </div>

      {show ? (
        meals != null && isFoodSearched ? (
          <div className={styles.receipts}>
            {meals.map((recipe) => (
              <FoodSearchedPart
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                instruction={recipe.strInstructions}
                youtube={recipe.strYoutube}
                key={recipe.idMeal}
              />
            ))}
          </div>
        ) : mealsWithIngreds != null && isIngredientSearched ? (
          <div className={styles.receipts}>
            {mealsWithIngreds.map((recipe) => (
              <IngredientSearchedPart
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                id={recipe.idMeal}
                key={recipe.idMeal}
              />
            ))}
          </div>
        ) : mealsWithUsers != null ? (
          <div className={styles.receipts}>
            {mealsWithUsers.map((recipe) => (
              <UserSearchedPart
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                id={recipe.idMeal}
                key={recipe.idMeal}
              />
            ))}
           
          </div>
        ) : !isIngredientSearched && !isFoodSearched && !isUserSearched ? (
          <div className={styles.receipts}>
            {meals.map((recipe) => (
              <MainPart
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                instruction={recipe.strInstructions}
                youtube={recipe.strYoutube}
                key={recipe.idMeal}
              />
            ))}
          </div>
        ) : (
          <p></p>
        )
      ) : (
        <div className={styles.spinner}>
             <SpinnerRoundFilled size="15%" color="rgb(156, 40, 40)" /> 
            
        </div>
        
      )}
      {/* {(isFoodSearched && searchFounded)? */}

      <Footer />
      
    </div>
    
  );
}

export default Home;
