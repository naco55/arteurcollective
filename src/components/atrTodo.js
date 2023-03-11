import Head from "next/head";
import Link from "next/link";

export default function AtrTodo({ children }) {
    return (
        <div className="grid place-items-center pt-40">
            <Head>
                <title>Arteur: {children}</title>
            </Head>
            <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">[{children}]</h2>
                    <p><br/>Na Na To do ...<br/></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary capitalize">
                            <Link href='/' >Go Arteur</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}