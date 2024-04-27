import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export default function Donate() {
    return (
        <div className="min-h-screen">
            <div className="h-1/2 bg-[#edece8]">
                <div className="grid grid-cols-2 gap-4 pl-10">
                    <div className="bg-[#edece8] p-4 w-30">
                        <div className="card w-98 py-8 bg-[#edece8]">
                            <div className="card-body">
                                <div className="bg-[#edece8] flex justify-left pb-3">
                                    <Image src="/arteur-donate2.png" alt="Arteur-Donate" width={400} height={200} />
                                </div>
                                <div className="font-trebuchet text-xl pt-8">With your donation, we will work on the following:</div>
                                <div className="font-trebuchet font-bold text-xl pt-4" style={{color: "#b23838;"}}>CREATIVE EMPOWERMENT</div>
                                <div className="font-trebuchet text-xl pt-2">Support the careers AAPI creatives by showcasing their work and sponsoring projects</div>
                                <div className="font-trebuchet font-bold text-xl pt-4" style={{color: "#b23838;"}}>COMMUNITY SUPPORT</div>
                                <div className="font-trebuchet text-xl pt-2">Donate to relevant AAPI or creative causes, nonprofits, and relief funds</div>
                                <div className="font-trebuchet font-bold text-xl pt-4" style={{color: "#b23838;"}}>ORGANIZATION EXPANSION</div>
                                <div className="font-trebuchet text-xl pt-2">Strengthen marketing efforts to foster a larger creative community</div>
                                <div className="font-trebuchet font-bold text-xl pt-8" style={{color: "#b23838;"}}>as a 501(c)3 nonprofit, monetary donations are tax-deductible</div>
                                <div className="font-trebuchet font-bold text-xl pt-2" style={{color: "#b23838;", fontStyle: 'italic', textAlign: 'center'}}>EIN: #88-2093574</div>
                            </div>
                        </div>
                        {/*<div className="text-center font-bold font-serif text-2xl pt-20">*/}
                        {/*    why you should donate to me because I am the most important person and Serena is perfect :D*/}
                        {/*</div>*/}
                    </div>
                    <div className="bg-[#edece8] p-4 pt-20">
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
            {/*<div className="flex flex-wrap justify-center bg-[#edece8]">*/}
            {/*    {images.map((imgSrc, index) => (*/}
            {/*        <div key={index} className="m-4">*/}
            {/*            <Image src={imgSrc} alt={`Image ${index}`} width={150} height={150} />*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
}


// export default function Page() {
//     return (
//         <AtrTodo>Donate</AtrTodo>
//     )
// }
