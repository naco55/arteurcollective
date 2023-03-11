import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import AtrTodo from "@/components/atrTodo";

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    return (
        <AtrTodo>Arteur Features</AtrTodo>
    )
}
