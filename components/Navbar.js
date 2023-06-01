import Link from "next/link"
import Image from "next/image"

import styles from '../styles/Navbar.module.css'
import { useState, useEffect } from "react"
import { useRouter } from "next/router"


export default function Navbar() {

    const [selected, setSelected] = useState('home');
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === '/') {
            setSelected('home');
        } else if (router.pathname === '/about') {
            setSelected('about');
        }
    }, [router.pathname]);

    return (
        <nav className='flex justify-between items-center p-3 from-red-500 via-[#333] to-black via-30% bg-gradient-to-r border-b border-zinc-400'>
            <Link className=" hover:animate-spin" href={'/'}>
                <div className='flex justify-center items-center gap-2 select-none'>
                    <Image
                        src="/images/pokemon_121114.png"
                        width={40}
                        height={40}
                        alt="PokeNext"
                    />
                </div>
            </Link>
            <ul className='flex justify-between gap-5 border-b border-black group px-4 ' >
                <li>
                    <Link className={`duration-200border-b py-2 border-black group hover:border-b-red-500  ${selected === 'home' ? 'text-red-500' : 'text-zinc-500'}`} href="/">Home</Link>
                </li>
                <li>
                    <Link className={`duration-200 border-b py-2 border-black group hover:border-b-red-500 ${selected === 'about' ? 'text-red-500' : 'text-zinc-500'}`} href="/about">Sobre</Link>
                </li>
                <li className="">
                    <a className={`duration-200 border-b py-2 border-black group hover:border-b-red-500 ${selected === 'about' ? 'text-red-500' : 'text-zinc-500'}`} href="/api/auth/login">Login</a>
                </li>
                <li>
                    <a className={`duration-200 border-b py-2 border-black group hover:border-b-red-500 ${selected === 'about' ? 'text-red-500' : 'text-zinc-500'}`} href="/api/auth/logout">Logout</a>
                </li>
            </ul>
        </nav >
    )
}
