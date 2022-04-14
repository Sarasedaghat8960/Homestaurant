import { useEffect, useState } from "react";
import "../App.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import MainPart from "../components/MainPart/MainPart";
import SearchBar from "../components/SearchBar/SearchBar";
import { uuid } from "uuidv4";
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
  //APIs for diferent searches and the main page 
  const APIFood = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  const APIINGRED = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const APIUSER = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${user}`;
  console.log("ingredient from app", ingredient);
  console.log("APIINGRED", APIINGRED);
  //fetch data for searching with food name
  async function getMeal() {
    const res = await fetch(APIFood);
    const data1 = await res.json();
    console.log(data1);
    setMeals(data1.meals);
  }

  //fetch data for searching with food ingredients
  async function getIntMeal() {
    const res2 = await fetch(APIINGRED);
    const data2 = await res2.json();
    console.log("data2", data2);
    setMealsWithIngreds(data2.meals);
  }
  // fetch data for searching with user
  async function getUserMeal() {
    const res3 = await fetch(APIUSER);
    const data3 = await res3.json();
    console.log("data3", data3);
    setMealsWithUsers(data3.meals);
  }
  // useEffect for search
  useEffect(() => {
    getMeal();
    setShow(false);
  }, [search]);
  // useEffect for ingredient
  useEffect(() => {
    getIntMeal();
    setShow(false);
  }, [ingredient]);
  // useEffect for user
  useEffect(() => {
    getUserMeal();
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
            Search resulr for food with the word <u>{search}</u> in name
          </h2>
        ) : isIngredientSearched ? (
          <h2>
            Search resulr for food with the word <u>{ingredient}</u> in
            ingredients
          </h2>
        ) : isUserSearched ? (
          <h2>
            Search resulr for food with the category of <u>{user}</u>
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
