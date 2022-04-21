import styles from './SearchBar.module.scss'
import React, { useState } from 'react'
import{ FaSearch} from 'react-icons/fa'

export default function SearchBar({setSearch,setIsFoodSearched,setIsIngredientSearched,setIsUserSearched,setIngredient,setUser}) {
 const [input,setInput]=useState("");
 const [ingInput,setIngInput]=useState("");
 const [usInput,setUsInput]=useState("");
 const checkList = [{name:"Select Category",value:""},{name:"Vegan", value:"Vegan"},{name:"Vegeterian", value:"Vegetarian"},{name:"Sea food lover", value:"Seafood"},{name:"Meat lover", value:"Beef"},{name:"Children Favourite Food", value:"Pasta"},{name:"Children Favourite Dessert", value:"Dessert"}];

 // get the value of search with food name 

  const getInputValue=()=>{
     
      if(input){
        setSearch(input);
        setIsFoodSearched(true);
        setIsIngredientSearched(false);
        setIsUserSearched(false)

    }
  }
 // get the value of search with Ingredient

  const getIngredientValue=()=>{
    
    if(ingInput){
      setIngredient(ingInput);
      setIsIngredientSearched(true)
      setIsFoodSearched(false)
      setIsUserSearched(false)
     }
  }
 // get the value of search with user 
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
          <div className={styles.searchCardContainer}>
              <div className={styles.searchInput}  > 
                 <input type="text" placeholder='Search with  food name'   className={styles.searchInput}  onChange={(event)=>{event.preventDefault(); setInput(event.target.value)}} />
               </div>
              <div  className={styles.searchButton}>
                  <button type="submit"   onClick={getInputValue}><FaSearch/></button>
              </div>
          </div> 
          <div className={styles.searchCardContainer}>
              <div className={styles.searchInput}  > 
                 <input type="text" placeholder='Search with ingredient'className={styles.searchInput}  onChange={(event)=>{event.preventDefault(); setIngInput(event.target.value)}}/>
              </div>
              <div  className={styles.searchButton}>
                  <button type="submit"  className={styles.searchButton} onClick={getIngredientValue}><FaSearch/></button>
              </div>
         </div>
         <div className={styles.searchCardContainer}>
         <div className={styles.searchInput}  >
            
                   <select  onChange={(e)=>{e.preventDefault();setUsInput(e.target.value)} } className={styles.userContainer} >
                           {checkList.map((item,index) => (
                         <option value={item.value} key={index}>{item.name}</option>    ))}
                  </select>
           </div>
           <div  className={styles.searchButton}>
               <button type="submit"  className={styles.searchButton} onClick={getUserValue}><FaSearch/></button>
          </div>
 

    </div>
    
     </div>

    </>
  )
}
