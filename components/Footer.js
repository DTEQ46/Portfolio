import React from 'react'
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
        <img src='/images/avatar.svg' alt='avatar'/>
        <div className={styles.social}>
        <img src='/images/twitter.svg' alt='avatar'/>
        <img src='/images/github.svg' alt='avatar'/>
        <img src='/images/linkedin.svg' alt='avatar'/>
        <img src='/images/email.svg' alt='avatar'/>
        </div>
        
        
    </div>
  )
}

export default Footer