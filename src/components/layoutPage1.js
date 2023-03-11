import Header from './header'
import Footer from './footer'

export default function LayoutPage1({ children }) {
    return (
        <>
            <h1>layoutPage1:</h1>
            <Footer />
            <main>{children}</main>
            <Header />
        </>
    )
}