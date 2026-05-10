"use client"

import { MdLightMode , MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ModeSwitch = () => {

  const {theme , setTheme , systemTheme} = useTheme()
  const [mounted , setMounted] = useState(false)
  const currentTheme= theme === "system" ? systemTheme : theme

  useEffect(()=>{

    setMounted(true)

  },[])

  if(!mounted) return null

  return (

    <>

     {mounted  && <> <div>{currentTheme==="dark" ? <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500' onClick={()=>setTheme(currentTheme === "dark"? "light" : "dark")}/> : <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={()=>setTheme(currentTheme === "dark"? "light" : "dark")}/>}</div></>}
   
    
    </>
   
   

  )
}

export default ModeSwitch