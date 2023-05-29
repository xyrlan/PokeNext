import Link from "next/link"
import Image from "next/image"

import styles from '../styles/Navbar.module.css'


export default function Navbar() {

    return (
        <nav className='flex justify-between items-center p-3 from-red-500 via-[#333] to-black via-30% bg-gradient-to-r  border-b border-white'>
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
