import Head from 'next/head';
import Navigation from '../Components/Navigation';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Olasehinde</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Navigation />
    </div>
  );
}
