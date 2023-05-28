import Image from "next/image"

import styles from '../styles/About.module.css'


export default function About() {
    return (
        <div className=' from-gray-600 to-transparent bg-gradient-to-tl h-screen max-h-screen relative overflow-hidden' >

            
            <div id='image-slide-right' className='bg-cover h-full w-full mix-blend-difference absolute left-[20%]' style={{ backgroundImage: "url('/images/pokemonwallpaper2.png')" }} />


            <div id="image-slide-left" className="z-50 flex flex-col justify-center w-fit items-center gap-2 p-20 ">
                <h1 className="text-4xl text-red-500">Sobre o projeto</h1>
                <p className=""> <span>Next.js</span></p>
            </div>

        </div>
    )
}