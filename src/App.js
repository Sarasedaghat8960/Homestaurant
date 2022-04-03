import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPart from './components/MainPart/MainPart';
import SearchBar from './components/SearchBar/SearchBar';
import {uuid } from 'uuidv4';
function App() {
  const ApplicationID = "ac02a9fd";
  const ApplicationKey = "e6415acd08e580bf7ff0124a0435dfb8"	;
  const [search,setSearch]=useState("");
  const [receipts,setReceipts]=useState([]);
  const [isFoodSearched,setIsFoodSearched]=useState(false);
  const [isIngredientSearched,setIsIngredientSearched]=useState(false);
  const [ingredient1,setIngredient1]=useState("")
  
  const ApiUrlFood= `https://api.edamam.com/search?q=${search}&app_id=${ApplicationID}&app_key=${ApplicationKey}&imageSize=SMALL`
 const API2="www.themealdb.com/api/json/v1/1/random.php"
 console.log("API2",API2);
  console.log("ingredient from app",ingredient1);
console.log(ApiUrlFood);
  useEffect(()=>{
    fetch(ApiUrlFood)
   .then(res=>res.json())
   .then(result=> {
     console.log(result);
     setReceipts(result.hits);
  })
  
    },[search])
  console.log("Search from app",search);
  console.log("receipt from app",receipts);

  return ( 
  <div>
    <Header/>
    <SearchBar search={search} setSearch={setSearch}  setIsFoodSearched={setIsFoodSearched} setIsIngredientSearched={setIsIngredientSearched} setIngredient1={setIngredient1}  />
<div className='receipts'>

{receipts.map(receipt=> 
       <MainPart title={receipt.recipe.label} image={receipt.recipe.image} ingredients={receipt.recipe.ingredients} />
      )}

</div>
    

    
    <Footer/>

</div>
   
  );
}

export default App;