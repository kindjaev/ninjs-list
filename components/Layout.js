import Footer from "./Footer";
import Nav from "./Nav";


const Layout = ({ children }) => {
    return ( 
        <div className="main">
            <Nav />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
     );
}
 
export default Layout;