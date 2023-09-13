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
                    <div className="flex items-center justify-center py-12">
                        <Image src="/arteur-name2.png" alt="Arteur-Name" width={400} height={200} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/arteur-motto.png" alt="Arteur-Motto" width={400} height={200} />
                    </div>
                    {/*<div className="flex items-center justify-center font-serif font-bold text-4xl">*/}
                    {/*    Empowering AAPI Creatives.*/}
                    {/*</div>*/}
                </div>
                <div className="p-4 col-span-1 pt-10 flex items-center justify-center pr-10 pl-10">
                    {/*<div className="pr-30 font-serif font-bold text-3xl pt-20">*/}
                    {/*    About*/}
                    {/*</div>*/}
                    {/*<div className="font-serif text-2xl pt-3">*/}
                    {/*    Arteur Collective champions AAPI creatives and aims to eliminate the stigma of pursuing the arts in AAPI culture. Arteur will foster tight-knit communities by connecting AAPI creatives and supporting their careers.*/}
                    {/*</div>*/}
                    <div className="card w-98 py-10 bg-[#edece8] shadow-xl">
                        <div className="card-body">
                            {/*<div className="card-title font-serif font-bold text-2xl">About</div>*/}
                            <div className="flex items-center justify-left">
                                <Image src="/arteur-about.png" alt="Arteur-About" width={100} height={100} />
                            </div>
                            {/*<div className="font-serif text-xl pt-8">Arteur Collective is a 501(c)3 nonprofit that champions and celebrates AAPI creatives, while aiming to eliminate the stigma of pursuing the arts common in mamy AAPI culture. Arteur fosters tight-knit communities by connecting AAPI creatives with each other and supporting their careers.</div>*/}
                            <div className="font-trebuchet text-xl pt-8">Arteur Collective is a 501(c)3 nonprofit that champions and celebrates AAPI creatives, while aiming to eliminate the stigma of pursuing the arts common in mamy AAPI culture. Arteur fosters tight-knit communities by connecting AAPI creatives with each other and supporting their careers.</div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-10 bg-[#edece8]">
                <InstagramFeed token="IGQWRQVmh1SFNUd2c4S1U1aFlaY2JWSnNubVJJZAWliYUdWQ1lNM3ZAoQ0YwRlZAFZA3VvZAi1DZAks3TURGc2VSMjV6VklwM0FTOW45dnJ6dXJrS1I2ay0wQzBxWExDTHNvaVdPU0tRazNoR1Q0eWFUYmlRUkV5ZA0RwX2cZD"  counter="18"/>
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