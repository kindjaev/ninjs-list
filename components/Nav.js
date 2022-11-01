import Link from "next/link"
import Image from "next/image"

const Nav = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/vercel.svg" height={40} width={80}/>
            </div>
            <div className="links">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/ninjas'>Linkings</Link>
            </div>
        </nav>
     );
}
 
export default Nav;