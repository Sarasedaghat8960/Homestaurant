import styles from './SearchBar.module.scss'
import React, { useState } from 'react'


export default function SearchBar({setSearch,setIsFoodSearched,setIsIngredientSearched,setIsUserSearched,setIngredient,setUser}) {
 const [input,setInput]=useState("");
 const [ingInput,setIngInput]=useState("");
 const [emptyInput,setEmptyInput]=useState(false);
 const [emptyIngInput,setEmptyIngInput]=useState(false);
 const checkList = [{name:"",value:""},{name:"Vegan", value:"Vegan"},{name:"Vegeterian", value:"Vegetarian"},{name:"Sea food lover", value:"Seafood"},{name:"Meat lover", value:"Beef"},{name:"Children Favourite Food", value:"Pasta"},{name:"Children Favourite Dessert", value:"Dessert"}];
 const [value, setValue]=useState("")
const [checked,setChecked]=useState(true)
  const getInputValue=()=>{
    console.log("input:",input);
    if(input){
      setSearch(input);
    setIsFoodSearched(true);
    setIsIngredientSearched(false);
    setIsUserSearched(false)

    // }else{
    //    setEmptyInput(true)
       

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
  const handleChecked=()=>{
console.log(item);
  }
  const getUserValue=()=>{
    
      console.log(value);
      setUser(value)
      setIsFoodSearched(false);
    setIsIngredientSearched(false);
    setIsUserSearched(true)
  }

  return (
    <>
    <div className={styles.searchContainer}>

    <div className={styles.searchForm}  > 
    <input type="text" placeholder='Type food name'  key={input} className={styles.searchReceipt1}  onChange={(event)=> setInput(event.target.value)} />
      <button type="submit"  className={styles.searchReceiptButton}  onClick={getInputValue}>Search Receipt with food name</button>
         
     </div> 
    <div className={styles.searchForm}>
  
     {/* <form className={styles.search-form}>  */}
     <input type="text" placeholder='Type ingredient' key={ingInput}className={styles.searchReceipt2}  onChange={(event)=> setIngInput(event.target.value)}/>
      <button type="submit"  className={styles.searchReceiptButton} onClick={getIngredientValue}>Search Receipt with ingredient</button>
  
    {/* </form> */}
    </div>
    <div className={styles.searchForm}>
    <div className={styles.listContainer}>
    <div className={styles.userTypeText} >User type : </div>
      <select value={value} onChange={(e)=>setValue(e.target.value)}>
      {checkList.map((item, index) => (
         
         
            <option value={item.value} key={item.value}>{item.name}</option>
            
         ))}
         
    </select>

    </div>
   
    <button type="submit"  className={styles.searchReceiptButton} onClick={getUserValue}>Search Receipt with user type</button>

  </div>

    </div>
    
    </>
  )
}
