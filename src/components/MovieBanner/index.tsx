import { DescriptionLabel, MovieBannerContainer, MovieDetail, TitleLabel } from "./styledComponent"
import { RoundedButton } from "../../GeneralUse/StyledComponents/generalStyledComponent"
import Ratings from "../Ratings"
import { moviesData } from "../../GeneralUse/Function/Api/type"
import React from "react"
import Genres from "../Genres"


const CompMovieBanner:React.FC<{data: moviesData}> = ({data}) => {

    return (
        <MovieBannerContainer>
            {data.backdrop_path && <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}></img>}
            <MovieDetail>
                <Genres data={data.genre_ids}/>
                <Ratings value={5} />
                <TitleLabel>{data.original_title}</TitleLabel>
                <DescriptionLabel>{data.overview}</DescriptionLabel>
                <RoundedButton>Watch Now</RoundedButton>
            </MovieDetail>
        </MovieBannerContainer>
    )
}

const MovieBanner = React.memo(CompMovieBanner)
export default MovieBanner