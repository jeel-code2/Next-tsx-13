import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
<div className=" text-gray-200 px-6 h-16 flex items-center justify-between shadow-md">
  <div className="text-xl font-extrabold hover:text-gray-300">
    <Link href="/">JEEL</Link>
  </div>

  <div className="flex space-x-6 text-lg font-semibold">
    <Link href="/" className="hover:text-gray-300 transition-colors">
      Home
    </Link>
    <Link href="/about" className="hover:text-gray-300 transition-colors">
      About Us
    </Link>
    <Link href="/services" className="hover:text-gray-300 transition-colors">
      Services
    </Link>
    <Link href="/contacts" className="hover:text-gray-300 transition-colors">
      Contacts
    </Link>
  </div>
</div>
  )
}

export default Navbar
