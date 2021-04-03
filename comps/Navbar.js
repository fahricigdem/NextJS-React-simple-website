import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={129} height={78} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/refugeeks"><a>Refugeeks</a></Link>
        </nav>
    );
}

export default Navbar;