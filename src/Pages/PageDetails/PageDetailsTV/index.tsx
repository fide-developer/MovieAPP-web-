
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MainContext } from "../../../App"
import MovieCard from "../../../components/MovieCard"
import MovieList from "../../../components/MovieList"
import { getSimiliarTV, getTVDetail } from "../../../GeneralUse/Function/Api"
import { moviesData, tvDetailType } from "../../../GeneralUse/Function/Api/type"
import { Section } from "../../../GeneralUse/StyledComponents/generalStyledComponent"
import CastDetail, { castType } from "../CastDetail"
import Episodes from "./Episodes"
import Synopsis from "../Synopsis"
import { AboutMovie, MovieDetailPoster, MovieDetails, MovieDetailsData, PageDetailsContainer } from "./styledComponent"

export enum categoryType {
    TV, Movies
}

const PageDetailsTV: React.FC = () => {
    const [tvDetail, setTvDetail] = useState<tvDetailType>()
    const [moviesDetail, setMoviesDetail] = useState<moviesData>()
    const [recommendationList, setRecommendationList] = useState<moviesData[]>()

    const context = useContext(MainContext)

    const {id} = useParams()
    
    useEffect(()=>{
        if(!id) return
        getTVDetail(id).then(data=> {
            setTvDetail(data)
            setMoviesDetail(data)
        })

        getSimiliarTV(id)
            .then(data=>{
                setRecommendationList(data.results)
            })

    },[id])

    return(
        <PageDetailsContainer>
            <MovieDetails>
                <MovieDetailPoster>
                    {moviesDetail && <MovieCard data={moviesDetail} asLink={false}/>}
                </MovieDetailPoster>
                
                <MovieDetailsData>
                    <AboutMovie>
                        <Synopsis synopsisText={tvDetail ? tvDetail.overview : ""}/>
                        <CastDetail ids={tvDetail?.id} type={castType.TV}/>
                    </AboutMovie>
                    {tvDetail && <Episodes runtime={tvDetail.episode_run_time} data={tvDetail.seasons} tvId={tvDetail.id}/>}
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