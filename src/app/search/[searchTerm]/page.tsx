import Results from '@/components/Results'

interface SearchProps{

  params:Promise<{searchTerm:string}>
}

const Searchpage = async ({params}:SearchProps) => {

  const resolvedParams = await params

  const searchQuery = resolvedParams.searchTerm

 try{

  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${searchQuery}&include_adult=false&page=1`);
  const data = await res.json();
  const apiData = data.results
  return(

    <div>

      {apiData? <Results apiData={apiData}/> : <h1>No results found</h1> }
    </div>
  )
 }
 catch(error){

  console.log(error)
  throw error
 }
}

export default Searchpage 