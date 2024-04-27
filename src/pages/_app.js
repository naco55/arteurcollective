import "../styles/globals.css";
import Layout from '../components/layout'
import Head from "next/head";

export default function ArteurApp({ Component, pageProps }) {
    const CurPageLayout = Component.PageLayout ? Component.PageLayout : Layout;
    const CurPageLayoutMain = Component.PageLayoutMain ? Component.PageLayoutMain : null;

    return (
        <CurPageLayout>
            <Head>
                <title>Arteur</title>
            </Head>
            {CurPageLayoutMain ? (
                <CurPageLayoutMain>
                    <Component {...pageProps} />
                </CurPageLayoutMain>
            ) : (
                <Component {...pageProps} />
            )}
        </CurPageLayout>
    );
};
