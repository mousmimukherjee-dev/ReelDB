import { Suspense } from 'react'
import NavbarItem from './NavbarItem'
import Loading from '@/app/loading'

const Navbar = () => {
  return (
    <Suspense fallback={<Loading/>}>
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-9 hovr:'>
    <NavbarItem title="Trending" params="fetchTrending"/>
    <NavbarItem title="Top Rated" params="fetchTopRated"/>
    </div>
     </Suspense>
  )
}

export default Navbar