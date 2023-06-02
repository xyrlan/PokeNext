import Link from "next/link"
import Image from "next/image"

import React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useUser } from "@auth0/nextjs-auth0/client"

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

    // const [isLogged, setLogged] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('http://localhost:3000/api/auth/me');
    //         if (response.length === 0) {
    //           setLogged(false);
    //         } else {
    //           setLogged(true);
    //         }
    //       } catch (error) {
    //         console.error('Ocorreu um erro:', error);
    //         setLogged(false);
    //       }
    //     };

    //     fetchData();
    //   }, []);

    const { user, error, isLoading } = useUser()

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;

    return (
        <nav className='flex justify-between items-center p-3 from-red-500 via-[#333] to-black via-30% bg-gradient-to-r border-b border-zinc-400 sticky top-0 z-50'>
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
            <ul className='flex justify-between gap-5 border-b border-black ' >
                <li>
                    <Link className={`duration-200border-b py-2 border-black hover:border-b-red-500  ${selected === 'home' ? 'text-red-500' : 'text-zinc-500'}`} href="/">Home</Link>
                </li>
                <li>
                    <Link className={`duration-200 border-b py-2 border-black hover:border-b-red-500 hover:text-white ${selected === 'about' ? 'text-red-500' : 'text-zinc-500'}`} href="/about">Sobre</Link>
                </li>
                {user && (
                <li>
                        <div className=" group relative">

                            <img className="h-10 w-10 rounded-full border border-white " src={user.picture} alt={user.name} />
                            <div className="hidden group-hover:block group-hover:absolute bg-black p-4 text-end right-0 z-50 min-w-[160px]">

                                <h2 className="text-white duration-200 border-b py-1 border-black group hover:border-b-red-500">{user.name}</h2>
                                {user.email && (<p className="text-white duration-200 border-b py-2 border-black group hover:border-b-red-500">{user.email}</p> )}

                                <a className={`duration-200 border-b py-1 border-black group hover:border-b-red-500 text-zinc-500 hover:text-white`} href="/api/auth/logout">Logout</a>

                            </div>
                        </div>
                    
                </li>
                )}
                <li className="">
                    <a className={`${user ? 'hidden' : ''} duration-200 border-b py-2 border-black hover:border-b-red-500 text-zinc-500 hover:text-white`} href="/api/auth/login">Login</a>
                </li>

            </ul>
        </nav >
    )
}
