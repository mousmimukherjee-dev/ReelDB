"use client"

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { text } from 'stream/consumers'


interface NavbarItemProps{



  title:string,
  params:string
}

const NavbarItem = ({title , params}:NavbarItemProps) => {

 const searchParams = useSearchParams();
 const genre = searchParams.get("genre")
  return (
    <Link href={`/?genre=${params}`} className={`hover:text-amber-600 font-semibold ${genre===params? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg" : ""}`}>{title}</Link>
  )
}

export default NavbarItem