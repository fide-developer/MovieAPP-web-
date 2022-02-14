import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { MainContext } from "../../App"
import { moviesData } from "../../GeneralUse/Function/Api/type"
import { LinkButton } from "../../GeneralUse/StyledComponents/generalStyledComponent"
import Genres from "../Genres"
import Ratings from "../Ratings"
import { LineGroups, MovieCardContainer, MovieCardTitle, MovieDetail, ReleaseYear } from "./styledComponent"

const MovieCard: React.FC<{data: moviesData, asLink?: boolean}> = ({data, asLink = true}) => {
    const [genreNumber, setGenreNumber] = useState<number[]>([])
   
    if(data.genres){
        if(genreNumber.length === 0)
        data.genres.map(data=> setGenreNumber(state=> state = [...state,data.id]))
    }
    
    
    const path = data.original_title? `/movie/${data.id}` : `/tv/${data.id}`
    
    //get year only from formar yyyy-mm-dd
    const beautyYear = (date?:string) => {
        if(!date) return " "
        return date.split("-")[0]
    }

    //prevent click when item scrolling
    const[isClick, setIsClick] = useState<boolean>(false)
    const[isDrag,setIsDrag] = useState<boolean>(false)

    const handleMouseDown = () => {
        setIsClick(true)
        setIsDrag(false)
    }

    const handleMouseDrag = () => {
        if(!isClick) return
        setIsDrag(true)
    }

    //handle click data flow / state
    const handleClick = (event: any) => {
        if(!asLink || isDrag) {
            event.preventDefault()
            return
        }
    }
    return(
            <MovieCardContainer className={asLink? "links" : ""} to={{pathname: path, }} draggable={false} 
                onClick={(e)=> handleClick(e)}
                onMouseMove={()=> handleMouseDrag()}
                onMouseUp={()=> setIsClick(false)}
                onMouseDown={()=>handleMouseDown()}
                >
                <img draggable={false}  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                <MovieDetail>
                    <Genres data={data.genres? genreNumber : data.genre_ids} />
                    <LineGroups>
                        <Ratings value={data.vote_average} />
                        <ReleaseYear>Release Year : {data.release_date? beautyYear(data.release_date) : beautyYear(data.first_air_date)}</ReleaseYear>
                    </LineGroups>
                    <MovieCardTitle>{data.original_title ? data.original_title : data.original_name}</MovieCardTitle>
                </MovieDetail>
                {asLink && <LinkButton>Watch Now &gt;</LinkButton>}
            </MovieCardContainer>

    )
}

export default React.memo(MovieCard)