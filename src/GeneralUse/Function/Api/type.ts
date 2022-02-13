
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
    genres?: genre[],
    release_date?: string,
    first_air_date?: string
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

export type cast = {
    adult: boolean,
    character: string,
    credit_id: string,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    order: number,
    original_name: string,
    popularity: number,
    profile_path: string
}

export type tvImageData = {
    aspect_ratio: number
    file_path: string,
    height: number,
    vote_average: number,
    vote_count: number,
    width: number
}