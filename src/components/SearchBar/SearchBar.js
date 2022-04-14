import styles from './SearchBar.module.scss'
import React, { useState } from 'react'


export default function SearchBar({setSearch,setIsFoodSearched,setIsIngredientSearched,setIsUserSearched,setIngredient,setUser}) {
 const [input,setInput]=useState("");
 const [ingInput,setIngInput]=useState("");
 const [usInput,setUsInput]=useState("");
 const checkList = [{name:"Select Category",value:""},{name:"Vegan", value:"Vegan"},{name:"Vegeterian", value:"Vegetarian"},{name:"Sea food lover", value:"Seafood"},{name:"Meat lover", value:"Beef"},{name:"Children Favourite Food", value:"Pasta"},{name:"Children Favourite Dessert", value:"Dessert"}];


  const getInputValue=()=>{
    console.log("input:",input);
     
      if(input){
        setSearch(input);
        setIsFoodSearched(true);
        setIsIngredientSearched(false);
        setIsUserSearched(false)

    }
  }
  console.log("input",input);
  const getIngredientValue=()=>{
    
    console.log("IngInput:",ingInput);
    if(ingInput){
      setIngredient(ingInput);
      setIsIngredientSearched(true)
      setIsFoodSearched(false)
      setIsUserSearched(false)
     }
  }
 
  const getUserValue=()=>{
     console.log(usInput);
     if(usInput){
      setUser(usInput);
      setIsFoodSearched(false);
      setIsIngredientSearched(false);
      setIsUserSearched(true);
     }
     
  }

  return (
    <>
    <div className={styles.searchContainer}>

    <div className={styles.searchForm}  > 
    <input type="text" placeholder='Type food name'   className={styles.searchReceipt}  onChange={(event)=>{event.preventDefault(); setInput(event.target.value)}} />
      <button type="submit"  className={styles.searchReceiptButton}  onClick={getInputValue}>Search Receipt with food name</button>
         
     </div> 
    <div className={styles.searchForm}>
  
     {/* <form className={styles.search-form}>  */}
     <input type="text" placeholder='Type ingredient'className={styles.searchReceipt}  onChange={(event)=>{event.preventDefault(); setIngInput(event.target.value)}}/>
      <button type="submit"  className={styles.searchReceiptButton} onClick={getIngredientValue}>Search Receipt with ingredient</button>
  
    {/* </form> */}
    </div>
    <div className={styles.searchForm}>
    <div className={styles.listContainer}>
    
      <select  onChange={(e)=>{e.preventDefault();setUsInput(e.target.value)} } className={styles.userContainer} >
      {checkList.map((item,index) => (
          <option value={item.value} key={index}>{item.name}</option>
      
      ))}
         
    </select>

    </div>
   
    <button type="submit"  className={styles.searchReceiptButton} onClick={getUserValue}>Search Receipt with user type</button>

  </div>

    </div>
    
    </>
  )
}
