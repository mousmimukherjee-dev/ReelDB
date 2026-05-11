

import Results from "@/components/Results";


const API_KEY= process.env.TMDB_API_KEY;
import type { Movie, TmdbResponse} from "@/types/TMDB"



interface HomeProps{

  searchParams:Promise<{genre?:string}>
}

export default async function Home({searchParams}:HomeProps){

  const params = await searchParams

  const genre = params.genre || "fetchTrending"

  try{

  const res = await fetch(`https://api.themoviedb.org/3${genre==="fetchTopRated"?`/movie/top_rated`:`/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`,{next:{revalidate:10000}});
  if(!res.ok){

    throw new Error("Failed to fetch")
  }
  const data:TmdbResponse = await res.json()
  const results:Movie[] = data.results
  return(<div><Results apiData={results}/></div>)
  }

  catch(error){

    console.log(error)
    throw error
  }



 
}