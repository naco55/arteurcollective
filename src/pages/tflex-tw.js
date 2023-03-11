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
    var ss = 'xxxx';

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
                align-items: stretch;
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

            <div className="flex flex-col h-screen xw-screen bg-gray-300 ">
                <div className='bg-green-500 text-white m-[10px] leading-[75px] text-center text-[30px]'><Header></Header></div>
                <div className='flex-1 bg-base-200 text-white m-[10px] leading-[75px] text-center text-[30px]'>
                    <div className="hero xmin-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <div className="indicator">
                                <span className="indicator-item badge badge-secondary">Home Page</span>
                                <button className="btn btn-lg btn-accent text-blue-50">Hi</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-green-500 text-white m-[10px] leading-[75px] text-center text-[30px]'><Footer/></div>
            </div>
        </>
    )
}

Page.PageLayoutMain = LayoutNone
Page.PageLayout = LayoutNone

