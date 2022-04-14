import React from 'react'


import {BrowserRouter as NavLink } from 'react-router-dom'
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa'
import { GiNoodles } from 'react-icons/gi'
import { GiFrenchFries } from 'react-icons/gi'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
      <div className={styles.menuContainer}>
        <NavLink  to="/" >
            <div className={styles.menuItem}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </div>
       </NavLink>
       <NavLink  to="/user" >
            <div className={styles.menuItem}>
                 <FaHamburger/>
                <h4>American</h4>
            </div>
       </NavLink>
       <NavLink  to="/" >
            <div className={styles.menuItem}>
            <GiNoodles/>
            <h4>Thai</h4>
            </div>
       </NavLink>
       <NavLink  to="/" >
            <div className={styles.menuItem}>
            <GiFrenchFries/>
        <h4>French</h4>
            </div>
       </NavLink>



    
</div>
  )
}
