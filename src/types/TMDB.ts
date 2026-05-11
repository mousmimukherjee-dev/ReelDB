export interface Movie{

  id:number,
  title:string,
  name:string,
  backdrop_path:string,
  poster_path:string,
  overview:string,
  release_date?:string,
  first_air_date?:string,
  vote_count:number

}

export interface TmdbResponse{

  results:Movie[]
}