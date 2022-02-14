
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieCard from "../../../components/MovieCard"
import MovieList from "../../../components/MovieList"
import { getSimiliarTV, getTVDetail } from "../../../GeneralUse/Function/Api"
import { moviesData, tvDetailType } from "../../../GeneralUse/Function/Api/type"
import { Section } from "../../../GeneralUse/StyledComponents/generalStyledComponent"
import CastDetail, { castType } from "../CastDetail"
import Episodes from "./Episodes"
import Synopsis from "../Synopsis"
import { AboutMovie, MovieDetailPoster, MovieDetails, MovieDetailsData, PageDetailsContainer } from "./styledComponent"
import { ContentPlaceHolderBackground, PlaceHolderText } from "./Episodes/EpisodeItem/styledComponent"

export enum categoryType {
    TV, Movies
}

const PageDetailsTV: React.FC = () => {
    const [tvDetail, setTvDetail] = useState<tvDetailType|null>()
    const [moviesDetail, setMoviesDetail] = useState<moviesData|null>()
    const [recommendationList, setRecommendationList] = useState<moviesData[]|null>()
    const [loadingDetails, setLoadingDetails] = useState<boolean>(false)

    const {id} = useParams()
    
    useEffect(()=>{
        setRecommendationList(null)
        setTvDetail(null)
        setMoviesDetail(null)
        setLoadingDetails(true)
        if(!id) return
        window.scrollTo(0,0)
        getTVDetail(id).then(data=> {
            setLoadingDetails(false)
            if(data.success) return
            
            setTvDetail(data)
            setMoviesDetail(data)
        })

        getSimiliarTV(id)
            .then(data=>{
                setLoadingDetails(false)
                if(data.success) return
                setRecommendationList(data.results)
            })

    },[id])

    return(
        <PageDetailsContainer>
            <MovieDetails>
                <MovieDetailPoster>
                    {loadingDetails && <ContentPlaceHolderBackground />}
                    {moviesDetail && <MovieCard data={moviesDetail} asLink={false}/>}
                </MovieDetailPoster>
                
                <MovieDetailsData>
                    <AboutMovie>
                        <Synopsis synopsisText={tvDetail ? tvDetail.overview : ""}>
                        {loadingDetails && <PlaceHolderText width="100%">
                                <ContentPlaceHolderBackground/></PlaceHolderText>}
                            {loadingDetails && <PlaceHolderText width="100%">
                                <ContentPlaceHolderBackground/></PlaceHolderText>}
                            {loadingDetails && <PlaceHolderText width="100%">
                                <ContentPlaceHolderBackground/></PlaceHolderText>}
                            {loadingDetails && <PlaceHolderText width="70%">
                                <ContentPlaceHolderBackground/></PlaceHolderText>}
                        </Synopsis>
                        <CastDetail ids={tvDetail?.id} type={castType.TV}/>
                    </AboutMovie>
                    {tvDetail && <Episodes runtime={tvDetail.episode_run_time} data={tvDetail.seasons} tvId={tvDetail.id}/>}
                </MovieDetailsData>
            </MovieDetails>
            <Section>
            {recommendationList && <MovieList movieCategory='You Might Also Like This' loading={recommendationList ? false : true}>
                    {recommendationList.map((tv: moviesData) => <MovieCard key={tv.id} data={tv}/>)}
                </MovieList>}
            </Section>
        </PageDetailsContainer>
    )
}

export default PageDetailsTV