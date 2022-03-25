import styles from './SearchBar.module.scss'
import React, { useState } from 'react'
export default function SearchBar(search,setSearch) {
 const [input,setInput]=useState("");

  const getInputValue=()=>{
    console.log("input:",input);
    setSearch(input)
  }
  

  return (
    <div className={styles.searchBar}>
      <p>SearchBar : </p>
     
     {/* <form className={styles.search-form}>  */}
      <input type="text" placeholder='Search Receipt' className={styles.searchReceipt}  onChange={(event)=> setInput(event.target.value)}/>
      <button type="submit"  className={styles.searchReceiptButton} onClick={getInputValue}>Search Receipt</button>
      
    {/* </form> */}
    </div>
  )
}
