import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navitems from "@/components/navitems";
const navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src='/images/logo.svg' alt="logo" width={46} height={44}/>
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <Navitems/>
        <p>SignIn</p>
      </div>
    </nav>
  )
}

export default navbar