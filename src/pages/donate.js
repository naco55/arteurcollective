import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import AtrTodo from "@/components/atrTodo";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export default function Donate() {
    return (
        <div className="min-h-screen">
            <div className="h-1/2 bg-[#edece8]">
                {/*<div className="flex items-center justify-center">*/}
                {/*    <Image src="/logo.png" alt="Arteur" width={100} height={100} />*/}
                {/*</div>*/}
                <div className="font-bold font-serif text-lg pb-10 pl-20 flex items-center justify-center">
                    Donate
                </div>
            </div>
            <div className="h-1/2 bg-[#edece8]">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#edece8] p-4 w-30">
                        <div className="text-center font-bold font-serif text-2xl pt-20">
                            blah blah blah why you should donate to me because I am the most important person and Serena is perfect :D
                        </div>
                    </div>
                    <div className="bg-[#edece8] p-4">
                        <Script src="https://donorbox.org/widget.js" paypalExpress="false"></Script>
                        <div className="flex items-center justify-center">
                            <iframe src="https://donorbox.org/embed/arteur-collective"
                                    height="650px"
                                    width="100%"
                                    style={{maxWidth: '500px', minWidth: '250px', margin: '0 auto'}}
                                    seamless="seamless"
                                    name="donorbox"
                                    frameborder="0"
                                    scrolling="no"
                                    allowpaymentrequest>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


// export default function Page() {
//     return (
//         <AtrTodo>Donate</AtrTodo>
//     )
// }
