import Navbar from "./Navbar";
import Header from "./Header";


const Layout = ({children}) => {
    return <>
        <Header />
        <Navbar />
        <div>
            <main>    
                {children}
            </main>
        </div>
    </>

}

export default Layout