import styles from './SearchBar.module.scss'
import React, { useState } from 'react'

export default function SearchBar({setSearch,setIsFoodSearched,setIsIngredientSearched,setIngredient}) {
 const [input,setInput]=useState("");
 const [ingInput,setIngInput]=useState("");
 const [emptyInput,setEmptyInput]=useState(false);
 const [emptyIngInput,setEmptyIngInput]=useState(false);
 const checkList = ["Vegan", "Children favorite", "Animal product consumer"];

  const getInputValue=()=>{
    console.log("input:",input);
    if(input){
      setSearch(input);
    setIsFoodSearched(true);
    setIsIngredientSearched(false);
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
     }
     //else{
    //    setEmptyIngInput(true)

    // }
  }

  return (
    <>
    <div className={styles.searchContainer}>

    <div className={styles.searchForm}  > 
    <input type="text" placeholder='Type food name' className={styles.searchReceipt1}  onChange={(event)=> setInput(event.target.value)} />
      <button type="submit"  className={styles.searchReceiptButton}  onClick={getInputValue}>Search Receipt with food name</button>
      {/* {(emptyInput==true)?
      
     <p className={styles.alert}>Search box is EMPTY</p> 
     
    :<p></p>
    } */}
   
     </div> 
    <div className={styles.searchForm}>
  
     {/* <form className={styles.search-form}>  */}
     <input type="text" placeholder='Type ingredient' className={styles.searchReceipt2}  onChange={(event)=> setIngInput(event.target.value)}/>
      <button type="submit"  className={styles.searchReceiptButton} onClick={getIngredientValue}>Search Receipt with ingredient</button>
      {/* {(emptyIngInput==true)?
      
     <p className={styles.alert}>Search box is EMPTY</p>
       
    :<p></p>
    } */}
    {/* </form> */}
    </div>
    <div className={styles.searchForm}>
    <div className={styles.listContainer}>
    <div className={styles.userTypeText} >User type : </div>

      {checkList.map((item, index) => (
         <div key={index} className={styles.userType}>
           <input value={item} type="checkbox"/>
           <span>{item}</span>
         </div>
      ))}
    </div>
    <button type="submit"  className={styles.searchReceiptButton} onClick={getIngredientValue}>Search Receipt with user type</button>

  </div>

    </div>
    
    </>
  )
}
