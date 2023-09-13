import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import AtrTodo from "@/components/atrTodo";

const inter = Inter({ subsets: ['latin'] })
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import { InstagramGallery } from "instagram-gallery";

export default function Page() {
    const tk = "IGQWRQVmh1SFNUd2c4S1U1aFlaY2JWSnNubVJJZAWliYUdWQ1lNM3ZAoQ0YwRlZAFZA3VvZAi1DZAks3TURGc2VSMjV6VklwM0FTOW45dnJ6dXJrS1I2ay0wQzBxWExDTHNvaVdPU0tRazNoR1Q0eWFUYmlRUkV5ZA0RwX2cZD";
    return (
        <div className="min-h-screen">
            <div className="h-1/2 bg-[#edece8]">
                <div className="bg-[#edece8] flex items-center justify-center pl-20 pt-10 pb-5">
                    <Image src="/arteur-community2.png" alt="Arteur-Community" width={500} height={200} />
                </div>
            </div>
            <InstagramGallery accessToken={tk} count={24} pagination={true}/>
        </div>
    )
}

// export default function Page() {
//     const tk = "IGQWRQVmh1SFNUd2c4S1U1aFlaY2JWSnNubVJJZAWliYUdWQ1lNM3ZAoQ0YwRlZAFZA3VvZAi1DZAks3TURGc2VSMjV6VklwM0FTOW45dnJ6dXJrS1I2ay0wQzBxWExDTHNvaVdPU0tRazNoR1Q0eWFUYmlRUkV5ZA0RwX2cZD";
//     return (
//         <div className="min-h-screen">
//             <div className="h-1/2 bg-[#edece8]">
//                 {/*<div className="flex items-center justify-center">*/}
//                 {/*    <Image src="/logo.png" alt="Arteur" width={100} height={100} />*/}
//                 {/*</div>*/}
//                 <div className="font-bold text-lg pb-10 pl-20 flex items-center justify-center">
//                     The Arteur Community
//                 </div>
//             </div>
//             {/*<InstagramFeed token={tk}  counter="12"/>*/}
//             return <InstagramGallery accessToken={tk} count={24} pagination={true}/>
//         </div>
//     )
// }