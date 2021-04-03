import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo10-portfolio</title>
        <link rel="icon" href="/favicon.ico" />

        <meta charset="utf-8" />
        <meta name="author" content="Rai Omido" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1" />
        <meta name="description" content="Commerce stores" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/images/logo.png" />
        <meta property="og:title" content="" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
        <meta name="og:description" content="" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0a192f" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@600&display=swap" rel="stylesheet" />

      </Head>

      <main className='bg-theme-blue-deep'>
        <p className='font-montserrat text-3xl uppercase'>hello portfolio</p>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div >
  );
}
