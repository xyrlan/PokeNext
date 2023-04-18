import Image from "next/image"

import styles from '../styles/About.module.css'


export default function About() {
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Projeto amador feito por Pedro "xyrlan" Lobato usando <h1>Next.js</h1></p>
            <Image 
            src="/images/charizard.png" 
            width={300}    
            height={300} 
            alt="Charizard" 
            />
        </div>
    )
}