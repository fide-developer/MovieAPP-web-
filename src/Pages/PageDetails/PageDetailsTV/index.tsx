
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MainContext } from "../../../App"
import MovieCard from "../../../components/MovieCard"
import { getTVDetail } from "../../../GeneralUse/Function/Api"
import { moviesData, tvDetailType } from "../../../GeneralUse/Function/Api/type"
import CastDetail from "../CastDetail"
import Episodes from "../Episodes"
import Synopsis from "../Synopsis"
import { AboutMovie, MovieDetailPoster, MovieDetails, MovieDetailsData, PageDetailsContainer } from "./styledComponent"

export enum categoryType {
    TV, Movies
}

const PageDetailsTV: React.FC = () => {
    const [tvDetail, setTvDetail] = useState<tvDetailType>()
    const [moviesDetail, setMoviesDetail] = useState<moviesData>()
    const context = useContext(MainContext)

    const {id} = useParams()
    
    useEffect(()=>{
        if(!id) return
        getTVDetail(parseInt(id)).then(data=> {
            setTvDetail(data)
            setMoviesDetail(data)
            console.log(data)
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
                        <CastDetail />
                    </AboutMovie>
                    {tvDetail && <Episodes runtime={tvDetail.episode_run_time} data={tvDetail.seasons} tvId={tvDetail.id}/>}
                </MovieDetailsData>
            </MovieDetails>
        </PageDetailsContainer>
    )
}

export default PageDetailsTV