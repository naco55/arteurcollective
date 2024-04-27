import Link from "next/link";
import Image from "next/image";

const menuItems = [
    { link: '/about', title: 'About' },
    { link: '/events', title: 'Events' },
    { link: '/artists', title: 'Artists' },
    { link: '/contact', title: 'Contact' },
    { link: '/donate', title: 'Donate' },
]

export default function Header({ children }) {
    return (
        <div className="navbar bg-[#edece8]">
            <div className="navbar-start pl-10 pt-5">
                <Link href="/">
                    <Image src="/logo-hq2.png" alt="Arteur" width={20} height={20} />
                </Link>
            </div>
            <div className="navbar-end pr-10 pt-5">
                <ul className="flex">
                    {menuItems.map((item, index) => (
                        <li key={index} className="ml-10 font-sans text-xl">
                            <Link href={item.link}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}