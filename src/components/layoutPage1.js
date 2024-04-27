import Header from './header'

export default function LayoutPage1({ children }) {
    return (
        <>
            <h1>layoutPage1:</h1>
            <main>{children}</main>
            <Header />
        </>
    )
}