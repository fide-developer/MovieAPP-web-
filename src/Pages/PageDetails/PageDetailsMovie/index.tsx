import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieCard from "../../../components/MovieCard"
import MovieList from "../../../components/MovieList"
import { getMovieDetail, getSimilarMovies} from "../../../GeneralUse/Function/Api"
import { moviesData, tvDetailType } from "../../../GeneralUse/Function/Api/type"
import { Section } from "../../../GeneralUse/StyledComponents/generalStyledComponent"
import CastDetail, { castType } from "../CastDetail"
import Synopsis from "../Synopsis"
import Episodes from "./Episodes"
import { AboutMovie, MovieDetailPoster, MovieDetails, MovieDetailsData, PageDetailsContainer } from "./styledComponent"

export enum categoryType {
    TV, Movies
}

const PageDetailsTV: React.FC = () => {
    const [movieData, setMoviesDetail] = useState<moviesData>()
    const [recommendationList, setRecommendationList] = useState<moviesData[]>()

    const {id} = useParams()
    
    useEffect(()=>{
        if(!id) return
        getMovieDetail(id).then(data=> {
            setMoviesDetail(data)
            console.log(data)
        })

        getSimilarMovies(id)
            .then(data=>{
                setRecommendationList(data.results)
            })

    },[id])

    return(
        <PageDetailsContainer>
            <MovieDetails>
                <MovieDetailPoster>
                    {movieData && <MovieCard data={movieData} asLink={false}/>}
                </MovieDetailPoster>
                
                <MovieDetailsData>
                    <AboutMovie>
                        <Synopsis synopsisText={movieData ? movieData.overview : ""}/>
                        <CastDetail ids={movieData?.id} type={castType.Movie}/>
                    </AboutMovie>
                    {movieData && <Episodes data={movieData}/>}
                </MovieDetailsData>
            </MovieDetails>
            <Section>
            {recommendationList && <MovieList movieCategory='You Might Also Like This'>
                    {recommendationList.map((tv: moviesData) => <MovieCard key={tv.id} data={tv}/>)}
                </MovieList>}
            </Section>
        </PageDetailsContainer>
    )
}

export default PageDetailsTV