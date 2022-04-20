import React from 'react'


import { FaHamburger, FaPizzaSlice , FaHome } from 'react-icons/fa'
import { GiNoodles } from 'react-icons/gi'
import { GiFrenchFries } from 'react-icons/gi'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
      <div className={styles.menuContainer}>
           <a href="/" className={styles.deg1}>
            <div className={styles.menuItem}>
           
                <FaHome/>
                <h4>Home</h4>
               
            </div>
            </a>
            <a href="/Italian" className={styles.deg2}>
            <div className={styles.menuItem}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </div>
            </a>
  
            <a href="/American" className={styles.deg3}>
            <div className={styles.menuItem}>
                 <FaHamburger/>
                <h4>American</h4>
            </div>
           </a>
            
    
           <a href="/Thai" className={styles.deg4}>
            <div className={styles.menuItem}>
            <GiNoodles/>
            <h4>Thai</h4>
            </div>
            </a>
            <a href="/French" className={styles.deg5}>
            <div className={styles.menuItem}>
            <GiFrenchFries/>
        <h4>French</h4>
            </div>
            </a>




    
</div>
  )
}
