import Link from 'next/link';
import Head from 'next/head';
import Clock from 'react-live-clock';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>CARTER BELL</title>
        <link rel="icon" href="/favicon.png"/>
        <link rel="stylesheet" href="https://use.typekit.net/rze2enu.css"/>
      </Head>

      <main>
        <p className={styles.title}>
          <img src="/cb_logo.png" alt="Vercel" className={styles.logo}/>
          <br></br>
          CARTER BELL
        </p>
      </main>

      <footer>
        <div>
          CMB STUDIO  LTD
        </div>
        <div>
          <a
            href="mailto: projects@carterbell.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            PROJECTS@CARTERBELL.COM
          </a>
        </div>
        <div class={styles.clockContainer}>
          LONDON {' '}
          <div className={styles.clock}>
            <Clock
              format={'HH:mm:ss'}
              style={{fontSize: '1.2em', minWidth: '60px'}}
              timezone={'Europe/London'}
              ticking={true}/>
          </div>
        </div>
      </footer>

      <style jsx>{`
        main {
          padding: 35vh 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
        }
        
        @media (max-width: 600px) {
            main {
              padding: 32vh 0;
            }
            footer {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              font-size: 0.9rem;
              gap: 5px;
              height: auto;
            }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "athelas", serif;
          font-weight: 400;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  );
}
