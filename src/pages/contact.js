import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer";
import AtrTodo from "@/components/atrTodo";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export default function Donate() {
  return (
      <div className="min-h-screen">
        <div className="h-1/2 bg-[#edece8]">
          {/*<div className="flex items-center justify-center">*/}
          {/*  <Image src="/logo.png" alt="Arteur" width={100} height={100} />*/}
          {/*</div>*/}
          <div className="font-bold font-serif text-lg pb-10 pl-20 flex items-center justify-center">
            Contact
          </div>
        </div>
        <div className="h-1/2 bg-[#edece8]">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#edece8] p-4 w-30">

            </div>
            <div className="bg-[#edece8] p-4">

            </div>
          </div>
        </div>
      </div>
  );
}