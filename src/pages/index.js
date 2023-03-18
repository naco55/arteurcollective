import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import Link from "next/link";
import AtrTodo from "@/components/atrTodo";
import InstagramFeed from "react-ig-feed";
import 'react-ig-feed/dist/index.css'

//const inter = Inter({ subsets: ['latin'] })

//document.body.style.backgroundColor = "#AA0000";



export default function Page() {
    return (
        // <AtrTodo>Home</AtrTodo>
        <div>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 p-4">
                    <div className="bg-[#edece8] flex items-center justify-center pt-10">
                        <Image src="/logo-hq2.png" alt="Arteur" width={200} height={200} />
                    </div>
                    {/*<div className="flex items-center justify-center font-serif font-bold text-4xl pl-10 pt-10">*/}
                    {/*    Empowering AAPI Creatives.*/}
                    {/*</div>*/}
                </div>
                <div className="p-4 col-span-1 pt-10 flex items-center justify-center">
                    {/*<div className="pr-30 font-serif font-bold text-3xl pt-20">*/}
                    {/*    About*/}
                    {/*</div>*/}
                    {/*<div className="font-serif text-2xl pt-3">*/}
                    {/*    Arteur Collective champions AAPI creatives and aims to eliminate the stigma of pursuing the arts in AAPI culture. Arteur will foster tight-knit communities by connecting AAPI creatives and supporting their careers.*/}
                    {/*</div>*/}
                    <div className="card w-98 bg-[#edece8] shadow-xl">
                        <div className="card-body">
                            <div className="card-title font-serif font-bold text-2xl">About</div>
                            <div className="font-serif text-xl pt-8">Arteur Collective champions AAPI creatives and aims to eliminate the stigma of pursuing the arts in AAPI culture. Arteur will foster tight-knit communities by connecting AAPI creatives and supporting their careers</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-10">
                <InstagramFeed token="IGQVJWZAWlfZAFROSkQ2ME9Bb1BHaE5rZAkk4X3NqM2xjQkRKUzhRM3VfUXVTMkZAGOEJDWkJUeXJWeXJSczlRX2tlUWpDM3dyRlY0cFNidlJEbERMUmtsLXhwMDRwSnRtWFJvWVlEQlRXaTJhcmRkOXlJcwZDZD"  counter="18"/>
            </div>
        </div>
    )
}

// <div className="grid grid-cols-5 gap-4">
//     <div className="bg-[#edece8] flex items-center justify-center p-4 col-span-3">
//         <Image src="/logo-hq2.png" alt="Arteur" width={500} height={500} />
//     </div>
//     <div className="bg-[#edece8] p-4 col-span-2 pt-20">
//         <div className="pr-30 underline font-serif font-bold text-3xl pt-20">
//             About
//         </div>
//         <div className="font-serif text-2xl pt-3 pl-5">
//             Arteur Collective champions AAPI creatives and aims to eliminate the stigma of pursuing the arts in AAPI culture. Arteur will foster tight-knit communities by connecting AAPI creatives and supporting their careers.
//         </div>
//     </div>
// </div>