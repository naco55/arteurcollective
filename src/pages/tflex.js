import Layout from '../components/layout'
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

function LayoutNone({children}) {
    return (
        <>
            <main>{children}</main>
        </>
    )
}

export default function Page() {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

{/*
            <style jsx>{`
              .ci {
                display: flex;
                background-color: DodgerBlue;
                align-items: stretch;
                flex-direction: column;
              }

              .ci {
                background-color: #f1f1f1;
                margin: 10px;
                padding: 20px;
                font-size: 30px;
              }

              .r1 > div {
              }

              .r2 > div {
                display: flex;
                flex-grow: 8;
              }

              .r3 > div {
              }

            `}
            </style>
*/}

            <style jsx>{`
                .c0 {
                display: flex;
                //align-items: stretch;
                background-color: #f1f1f1;
                flex-direction: column;
                min-height: 100vh;
                width: 100vw;
            }

                .ci {
                background-color: DodgerBlue;
                color: white;
                margin: 10px;
                text-align: center;
                line-height: 75px;
                font-size: 30px;
            }

                .r1 {
            }
                .r2 {
                display: flex;
                flex: 1;
            }
                .r3  {
            }

            `}</style>

            <div className="c0">
                <div className='ci r1'>1</div>
                <div className='ci r2'>2</div>
                <div className='ci r3'>3</div>
            </div>
        </>
    )
}

Page.PageLayoutMain = LayoutNone
Page.PageLayout = LayoutNone

