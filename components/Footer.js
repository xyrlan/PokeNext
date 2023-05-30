import styles from '../styles/Footer.module.css'


export default function Footer() {
    return (
        <footer className='flex justify-center items-center bg-[#333] absolute w-full '>
            <p>
                <span className=''>PokeNext</span> &copy; 2023 coded by: <a className='hover:text-red-500' href='https://github.com/xyrlan'>Xyrlan</a>
            </p>
        </footer>
    )
}