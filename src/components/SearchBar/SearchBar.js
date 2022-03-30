import styles from './SearchBar.module.scss'
import React, { useState } from 'react'
export default function SearchBar({setSearch,setIsFoodSearched,setIsIngredientSearched,setIngredient1}) {
 const [input,setInput]=useState("");
 const [ingInput,setIngInput]=useState("");
 const [emptyInput,setEmptyInput]=useState(false);
 const [emptyIngInput,setEmptyIngInput]=useState(false);

  const getInputValue=()=>{
    console.log("input:",input);
    if(input){
      setSearch(input);
    setIsFoodSearched(true);
    }else{
       setEmptyInput(true)
       

    }
    
  }
  const getIngredientValue=()=>{
    console.log("IngInput:",ingInput);
    if(ingInput){
    setIngredient1(ingInput);
    setIsIngredientSearched(true)
    }else{
       setEmptyIngInput(true)

    }
  }

  return (
   
    <div className={styles.searchBar}>
      <p>Search with food name  : </p>
     
     {/* <form className={styles.search-form}>  */}
      <input type="text" placeholder='Type food name' className={styles.searchReceipt}  onChange={(event)=> setInput(event.target.value)}/>
      <button type="submit"  className={styles.searchReceiptButton} onClick={getInputValue}>Search Receipt</button>
      {(emptyInput==true)?
     <p className={styles.alert}>Search box is EMPTY</p> 
    :<p></p>
    }
    {/* </form> */}
    <p>Search with ingredient name  : </p>
     {/* <form className={styles.search-form}>  */}
     <input type="text" placeholder='Type ingredient' className={styles.searchReceipt}  onChange={(event)=> setIngInput(event.target.value)}/>
      <button type="submit"  className={styles.searchReceiptButton} onClick={getIngredientValue}>Search Receipt with ingredient</button>
      {(emptyIngInput==true)?
     <p className={styles.alert}>Search box is EMPTY</p> 
    :<p></p>
    }
    {/* </form> */}
    </div>
    
    
  )
}
