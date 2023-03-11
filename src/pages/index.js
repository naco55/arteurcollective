import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import AtrTodo from "@/components/atrTodo";

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    return (
        <AtrTodo>Home</AtrTodo>
    )
}
