import React from 'react'
import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

function Layout({title, description, children}) {
  return (
    <div>
        <Head>
        <title>{title ? `${title} - Daniel Olasehinde` : 'Daniel Olasehinde'}</title>
        {description && <meta name="description" content={description}></meta>}
        <link rel="icon" href="/images/logo" />
      </Head>
      <Navigation />
      <main className={styles.main}> 
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout