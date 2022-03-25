import styles from './Header.module.scss'
import React from 'react'
import Logo from '../../image/Logo1.png'

export default function Header() {
  return (
    <>
    
    <div className={styles.header}>
      <h1>Header</h1>
     <img src={Logo}/>
    
    </div>
   
    </>
  )
}

