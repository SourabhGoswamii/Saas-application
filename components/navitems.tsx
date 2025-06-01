'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';
const navitems =[
    {label: "Home", href: "/"},
    {label: "Companions", href: "/companions"},
    {label: "Myjourney", href: "/myjourney"},
]


const Navitems = () => {

    const pathname=  usePathname();
    return (
        <nav className={"flex items-center gap-3"}>
            {navitems.map(({label, href}) => (
                <Link key={href} href={href} className={cn(pathname=== href && 'text-primary font-semibold')}>{label}</Link>
            ))}
        </nav>
    )
}
export default Navitems
