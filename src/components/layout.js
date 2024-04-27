import Header from './header'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen">
            <Header className=""/>
            <div className="flex-1">
                <div className="">
                    <main className="">{children}</main>
                </div>
            </div>
        </div>
    )
}