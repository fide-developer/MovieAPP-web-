const BearerToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQyNzA0NGJlNTVhZWNkZGFmNmZiODBhODZjZTdjNyIsInN1YiI6IjVjNDQ2MDVlMGUwYTI2NmQ1YWQzMWNmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92vwXpJjomWgRnSLbQM-QNcaiRarRUa3wrYzJpnHiqc"

//get list movie
export const getMovies = async ({category, page = 1}: {category: string, page ?: number}) => {
    const url = `https://api.themoviedb.org/3/movie/${category}?&language=en-US&page=1`
    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : BearerToken
        }
    })

    return response.json()
}

//get movie detail
export const getMovieDetail = async (id: number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`

    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : BearerToken
        }
    })

    return response.json()
}
//get list TV
export const getTV = async ({category, page = 1}: {category: string, page ?: number}) => {
    const url = `https://api.themoviedb.org/3/tv/${category}?&language=en-US&page=${page}`
    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : BearerToken
        }
    })

    return response.json()
}

//get TV Detail
export const getTVDetail = async (id: number) => {
    const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`

    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : BearerToken
        }
    })

    return response.json()
}

export const getTVEpisode = async (tvId:number ,episode: number, season: number) => {
    const url = `https://api.themoviedb.org/3/tv/${tvId}/season/${season}/episode/${episode}?&language=en-US`

    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : BearerToken
        }
    })

    return response.json()
}


export const getGenre = async () => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en-US"
    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : BearerToken
        }
    })

    return response.json()
}
