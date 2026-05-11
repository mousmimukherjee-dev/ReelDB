"use client"

import { useState  } from "react"
import { useRouter } from "next/navigation"

const SearchBox = () => {

  const [search , setSearch] = useState("")

  const navigation = useRouter()

  const handelSubmit=(e: { preventDefault: () => void })=>{

    e.preventDefault();
    navigation.push(`/search/${search}`)


  }

   
  return (
    <form className="flex justify-center px-5 max-w-6xl mx-auto" onSubmit={handelSubmit}>
      <input value={search} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value) } type="text" placeholder='Search Kerwords...' className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 "/>
      <button className="text-amber-600" disabled={!search} >Search</button>
    </form>
  )
}

export default SearchBox