import React from 'react'
import styles from '../styles/Navigation.module.css'

function Navigation() {
  return (
    <div className={styles.navigation}>
        <img src='/images/logo.svg' alt='logo'/>
        <img src='/images/menubar.svg' alt='menubar'/>
    </div>
  )
}

export default Navigation