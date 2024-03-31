import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';


const menuItems = [
    { link: '/', title: 'Home' },
    { link: '/features', title: 'Arteur Features' },
    { link: '/donate', title: 'Donate' },
    { link: '/contact', title: 'Contact' },
]

export default function Header({ children }) {
    const closeMenu = () => {
        const elem = document.activeElement;
        if(elem){
            elem.blur();
        }
    };
    return (
        <div className="navbar bg-[#edece8] border-b-2 border-[#b23838]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#b13738"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="font-trebuchet bg-[#faf9f5] menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems.map((mi) => (
                            // eslint-disable-next-line react/jsx-key
                            <li onClick={closeMenu}><Link href={mi.link}>{mi.title}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            {/*<div className="navbar-center">*/}
            {/*    <Link href="/" className="btn btn-circle btn-ghost button-circle">*/}
            {/*        <Image src="/logo-hq2.png" alt="Arteur" width={30} height={30} />*/}
            {/*    </Link>*/}
            {/*</div>*/}
            <div className="navbar-center">
                <Link href="/" className="btn btn-ghost">
                    <Image src="/arteur-menu-name.png" alt="Arteur" width={80} height={40} />
                </Link>
            </div>
        </div>
    )
}