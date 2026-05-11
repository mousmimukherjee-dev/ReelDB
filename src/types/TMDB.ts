export interface Movie{

  id:number,
  title:string,

}

export interface TmdbResponse{

  results:Movie[]
}