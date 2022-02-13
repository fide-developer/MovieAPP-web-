
export type genre = {
    id: number,
    name: string
}

export type moviesData = {
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_title?: string,
    overview: string,
    poster_path: string,
    title?: string,
    vote_average: number,
    name?: string,
    original_name?: string,
    genres?: genre[]
}

export type seasonType = {
    ir_date:string,
    episode_count:number,
    id:number,
    name:string,
    overview: string,
    poster_path: string,
    season_number: number
}

export type tvDetailType = {
    adult: boolean,
    backdrop_path:string,
    episode_run_time: number[],
    genres: genre[],
    id: number,
    name:string,
    original_name: string,
    overview:string,
    poster_path: string,
    seasons: seasonType[]
    spoken_languages?: [],
    status:string,
    tagline:string,
    type: string,
    vote_average: number,
    vote_count: number
}

export type tvEpisode = {
episode_number: number,
id: number,
name: string,
overview: string,
production_code: string,
season_number: number,
vote_average: number,
vote_count: number
}