import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieCard from "../../../components/MovieCard"
import MovieList from "../../../components/MovieList"
import NotFound from "../../../components/NotFound"
import { getMovieDetail, getSimilarMovies} from "../../../GeneralUse/Function/Api"
import { moviesData, tvDetailType } from "../../../GeneralUse/Function/Api/type"
import { Section } from "../../../GeneralUse/StyledComponents/generalStyledComponent"
import CastDetail, { castType } from "../CastDetail"
import { ContentPlaceHolderBackground, PlaceHolderText } from "../PageDetailsTV/Episodes/EpisodeItem/styledComponent"
import Synopsis from "../Synopsis"
import Episodes from "./Episodes"
import { AboutMovie, MovieDetailPoster, MovieDetails, MovieDetailsData, PageDetailsContainer } from "./styledComponent"

export enum categoryType {
    TV, Movies
}

const PageDetailsTV: React.FC = () => {
    const [movieData, setMoviesDetail] = useState<moviesData>()
    const [recommendationList, setRecommendationList] = useState<moviesData[]>()

    const[loadingDetails, setLoadingDetails] = useState<boolean>(false)
    const[errorDetails, setErrorDetails] = useState<string|null>(null)

    const {id} = useParams()
    
    useEffect(()=>{
        if(!id) return
        window.scrollTo(0,0)

        setLoadingDetails(true)
        setErrorDetails(null)

        getMovieDetail(id).then(data=> {
            setLoadingDetails(false)
            if(!data.success){
                setMoviesDetail(data)
            }else{
                setErrorDetails("Opps.. Data Not Found!")
            }
        }).catch((reason) => {
            console.log(reason)
            setLoadingDetails(false)
            setErrorDetails("Network Error, please try again later!")
        })

        getSimilarMovies(id)
            .then(data=>{
                if(!data.success)
                setRecommendationList(data.results)
            })

    },[id])
    return(
        <PageDetailsContainer>
            {!errorDetails ? <MovieDetails>
                <MovieDetailPoster>
                    {loadingDetails && <ContentPlaceHolderBackground />}
                    {movieData && <MovieCard data={movieData} asLink={false}/>}
                </MovieDetailPoster>
                
                <MovieDetailsData>
                    <AboutMovie>
                        <Synopsis synopsisText={movieData ? movieData.overview : ""}>
                            {loadingDetails && <PlaceHolderText width="100%">
                                <ContentPlaceHolderBackground/></PlaceHolderText>}
                            {loadingDetails && <PlaceHolderText width="100%">
                                <ContentPlaceHolderBackground/></PlaceHolderText>}
                            {loadingDetails && <PlaceHolderText width="100%">
                                <ContentPlaceHolderBackground/></PlaceHolderText>}
                            {loadingDetails && <PlaceHolderText width="70%">
                                <ContentPlaceHolderBackground/></PlaceHolderText>}
                        </Synopsis>
                        <CastDetail ids={movieData?.id} type={castType.Movie}/>
                    </AboutMovie>
                    {movieData && <Episodes data={movieData}/>}
                </MovieDetailsData>
            </MovieDetails> : <NotFound errorMessage={errorDetails? errorDetails : ""} />}
            
            
            <Section>
            {recommendationList && <MovieList loading={recommendationList ? false : true} movieCategory='You Might Also Like This'>
                    {recommendationList.map((tv: moviesData) => <MovieCard key={tv.id} data={tv}/>)}
                </MovieList>}
            </Section>
        </PageDetailsContainer>
    )
}

export default PageDetailsTV