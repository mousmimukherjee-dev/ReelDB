"use client"


import React from 'react'

import { useEffect } from 'react'

interface ErrorProps{

  error:Error,
  reset:()=>void
}

const Error = ({error, reset}:ErrorProps) => {

  useEffect(()=>{

    console.log(error)
  },[error])
  return (
    <div className='text-center mt-6'>

      <h1>Something went wrong. Try again later!</h1>
      <button className='cursor-pointer mt-3 hover:text-amber-600' onClick={()=>reset()}>Try again</button>
    </div>
  )
}

export default Error