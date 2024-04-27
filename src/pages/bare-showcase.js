import Head from 'next/head'
import EventCard from './EventCard'
import Link from 'next/link';
import Image from "next/image";

export default function Page() {
    return (
        <div className="text-black bg-[#edece8] pl-12 font-sans">
            <div className="pt-8 text-3xl">
                BARE Showcase
            </div>
            <div className="pt-3 text-xl">
                April 2023
            </div>
            <div className="pt-2 text-l">
                Berkeley, CA
            </div>
            <div className="pt-5 text-2xl">
                About
            </div>
            <div className="pt-6 text-l" style={{ wordSpacing: '0.3em' }}>
                Featuring: Vanessa Tan, Five Spice, Horsehorsetigertiger, Yoo Jin Bae, Esther Liang, Lauren Nishizaki,
                Wandy Cheng, Lee, Rae Xiang, Angela Wei
            </div>
            <div className="pt-2">
                <Image src={"/bare-showcase-details.jpeg"} alt={"Bare showcase details"} width={1400} height={650} objectFit="cover" />
            </div>
            <div className="pt-8 text-l" style={{ wordSpacing: '0.3em', paddingRight: '50vw'}}>
                In collaboration with BARE Magazine, at Way Station Brew, Artuer showcased talent from the Arteur
                community to the local city — celebrating creativity amongst artwork, live performances, and
                open conversations
            </div>
        </div>
    );
}
