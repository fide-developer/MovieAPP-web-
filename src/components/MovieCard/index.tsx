import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { MainContext } from "../../App"
import { moviesData } from "../../GeneralUse/Function/Api/type"
import { LinkButton } from "../../GeneralUse/StyledComponents/generalStyledComponent"
import Genres from "../Genres"
import Ratings from "../Ratings"
import { LineGroups, MovieCardContainer, MovieCardTitle, MovieDetail, ReleaseYear } from "./styledComponent"

const MovieCard: React.FC<{data: moviesData, asLink?: boolean}> = ({data, asLink = true}) => {
    const context = useContext(MainContext)
    const [genreNumber, setGenreNumber] = useState<number[]>([])
    
    if(data.genres){
        if(genreNumber.length === 0)
        data.genres.map(data=> genreNumber.push(data.id))
    }
    
    //handle click data flow / state
    const handleClick = (event: any) => {
        if(!asLink) {
            event.preventDefault()
            return
        }
        if(context){
            context.setMovieData(data)
        }
        
    }
    const path = data.original_title? `/movie/${data.id}` : `/tv/${data.id}`
    
    //get year only from formar yyyy-mm-dd
    const beautyYear = (date?:string) => {
        if(!date) return " "
        return date.split("-")[0]
    }
    return(
            <MovieCardContainer className={asLink? "links" : ""} to={{pathname: path, }} onClick={(e)=> handleClick(e)}>
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                <MovieDetail>
                    <Genres data={data.genres? genreNumber : data.genre_ids} />
                    <LineGroups>
                        <Ratings value={4} />
                        <ReleaseYear>Release Year : {data.release_date? beautyYear(data.release_date) : beautyYear(data.first_air_date)}</ReleaseYear>
                    </LineGroups>
                    <MovieCardTitle>{data.original_title ? data.original_title : data.original_name}</MovieCardTitle>
                </MovieDetail>
                {asLink && <LinkButton>Watch Now &gt;</LinkButton>}
            </MovieCardContainer>

    )
}

export default React.memo(MovieCard)