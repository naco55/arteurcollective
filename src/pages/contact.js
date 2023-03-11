import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer";
import AtrTodo from "@/components/atrTodo";

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
      <AtrTodo>Contact</AtrTodo>
  )
}
