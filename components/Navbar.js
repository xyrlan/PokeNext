import Link from "next/link"
import Image from "next/image"

import styles from '../styles/Navbar.module.css'


export default function Navbar() {

    return (
        <nav className={`${styles.navbar} `}>
            <Link href={'/'}>
            <div className='flex justify-center items-center gap-2'>
                <Image 
                src="/images/pokeball3d.png" 
                width={40} 
                height={40} 
                alt="PokeNext"
                />
            </div>
            </Link>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav >
    )
}
