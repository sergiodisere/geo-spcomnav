import styles from '../../styles/Home.module.css'
export default function Footer() {

  return (
    <>
    
    <footer className={styles.footer}>
      <div>
        <text>
          <a
            href="https://www.uab.cat/enginyeria/"
            target="_blank"
            rel="noopener noreferrer"
          >
            2021 Universitat Autònoma de Barcelona - Escola d'Enginyeria
          </a>
          <a
            href="https://www.linkedin.com/in/sergio-díaz98"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            &copy; Create by Sergio Díaz Serena 
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
          </a>
          <a
            href="http://spcomnav.uab.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            For SCPOMNAV UAB 
            {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
          </a>       
        </text>    
        </div>    
      </footer>
    </>
  )
}
