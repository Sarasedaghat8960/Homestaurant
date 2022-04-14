import React from 'react'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MainPart from "./components/MainPart/MainPart";
import SearchBar from "./components/SearchBar/SearchBar";

import FoodSearchedPart from "./components/FoodSearchedPart/FoodSearchedPart";
import IngredientSearchedPart from "./components/IngredientSearchedPart/IngredientSearchedPart";
import UserSearchedPart from "./components/UserSearchedPart/UserSearchedPart";

//import { SpinnerRoundFilled } from "spinners-react";
export default function Home({search,setSearch,setIsFoodSearched,setIngredient,setIsFoodSearched,setUser,setIsUserSearched,setIsIngredientSearched,isIngredientSearched,ingredient}) {
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
      <div className="searchedText">
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
          <div className="receipts">
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
          <div className="receipts">
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
          <div className="receipts">
            {mealsWithUsers.map((recipe) => (
              <UserSearchedPart
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                id={recipe.idMeal}
                key={recipe.idMeal}
              />
            ))}
            {/* <p>HELLO from {user}</p>  */}
          </div>
        ) : !isIngredientSearched && !isFoodSearched && !isUserSearched ? (
          <div className="receipts">
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
        <div className="spinner">
            {/* <SpinnerRoundFilled size="15%" color="rgb(156, 40, 40)" /> */}

        </div>
        
      )}
    

      <Footer />
     </div>
  )
}
