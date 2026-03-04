import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='p-4 text-xl text-gray-200 m-0 font-extrabold flex flex-row'>
      <Link href={"/"}>Home</Link>
      <Link href={"/users"}>Users</Link>
    </div>
  )
}

export default Navbar
