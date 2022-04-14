import React from 'react'


import {BrowserRouter as NavLink } from 'react-router-dom'
import { FaHamburger, FaPizzaSlice , FaHome } from 'react-icons/fa'
import { GiNoodles } from 'react-icons/gi'
import { GiFrenchFries } from 'react-icons/gi'
import {GrRestaurant}from 'react-icons/gr'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
      <div className={styles.menuContainer}>
           <a href="/">
            <div className={styles.menuItem}>
           
                <FaHome/>
                <h4>Home</h4>
               
            </div>
            </a>
            <a href="/Italian">
            <div className={styles.menuItem}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </div>
            </a>
  
            <a href="/American">
            <div className={styles.menuItem}>
                 <FaHamburger/>
                <h4>American</h4>
            </div>
           </a>
            
    
           <a href="/Thai">
            <div className={styles.menuItem}>
            <GiNoodles/>
            <h4>Thai</h4>
            </div>
            </a>
            <a href="/French">
            <div className={styles.menuItem}>
            <GiFrenchFries/>
        <h4>French</h4>
            </div>
            </a>




    
</div>
  )
}
