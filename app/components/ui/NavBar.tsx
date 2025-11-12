import Image from "next/image"
import Link from "next/link"
import logo from '@/public/icons/logo.png'

const NavBar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className="logo">
                <Image src={logo} alt="logo" />
                
                <p>DevEvent</p>
            </Link>

            <ul>
                <Link href='/'>Home</Link>
                <Link href='/'>Events</Link>
                <Link href='/'>Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar