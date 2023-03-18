import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import AtrTodo from "@/components/atrTodo";

const inter = Inter({ subsets: ['latin'] })
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import { InstagramGallery } from "instagram-gallery";

export default function Page() {
    const tk = "IGQVJWZAWlfZAFROSkQ2ME9Bb1BHaE5rZAkk4X3NqM2xjQkRKUzhRM3VfUXVTMkZAGOEJDWkJUeXJWeXJSczlRX2tlUWpDM3dyRlY0cFNidlJEbERMUmtsLXhwMDRwSnRtWFJvWVlEQlRXaTJhcmRkOXlJcwZDZD";
    return (
        <div className="min-h-screen">
            <div className="h-1/2 bg-[#edece8]">
                {/*<div className="flex items-center justify-center">*/}
                {/*    <Image src="/logo.png" alt="Arteur" width={100} height={100} />*/}
                {/*</div>*/}
                <div className="font-bold text-lg pb-10 pl-20 flex items-center justify-center">
                    The Arteur Community
                </div>
            </div>
            {/*<InstagramFeed token={tk}  counter="12"/>*/}
            return <InstagramGallery accessToken={tk} count={24} pagination={true}/>
        </div>
    )
}
