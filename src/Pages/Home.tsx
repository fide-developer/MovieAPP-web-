import { useEffect, useRef, useState } from "react"
import Carousel from "../components/Carousel"
import Loading from "../components/Loading"
import MovieBanner from "../components/MovieBanner"
import MovieCard from "../components/MovieCard"
import MovieList from "../components/MovieList"
import { getMovies, getTV } from "../GeneralUse/Function/Api"
import { moviesData } from "../GeneralUse/Function/Api/type"
import LazyLoad from "../GeneralUse/Function/LazyLoad"
import { Section } from "../GeneralUse/StyledComponents/generalStyledComponent"

const Home: React.FC = () => {
    const [loadMore, setLoadMore] = useState<boolean>(false)
    const [bannerMaterial,setBannerMaterial] = useState<moviesData[]>([])
    const [moviesNowPlaying, setMoviesNowPlaying] = useState<moviesData[]>()
    const [moviesPopular, setMoviesPopular] = useState<moviesData[]>()
    const [tvShow, setTvShow] = useState<moviesData[]>()

    const loadRef = useRef(null)
    
    //load more content (Movie List - Popular)
    LazyLoad(loadRef,(entries, orbserver)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                LoadMoreContent()
                orbserver.disconnect()
            }
        });
    })

    const LoadMoreContent = () => {
        setLoadMore(true)
        getMovies({category: "popular"})
        .then(data => {
            setTimeout(()=>{
                setMoviesPopular(data.results)
                setLoadMore(false)
            },1000)
        })
    }

    useEffect(()=>{
        getMovies({category: "now_playing"})
        .then(data => {
            let bannerMaterial = data.results.slice(0,3)
            setBannerMaterial(bannerMaterial)
            setMoviesNowPlaying(data.results)
        })
        getTV({category: "on_the_air"})
        .then(data=>{
            setTvShow(data.results)
        })
    }, [])

    return(
        <div style={{width:"100%", display: "flex", flexFlow: "column nowrap", overflow:"hidden"}}>
            <Carousel>
                {bannerMaterial.map((movies: moviesData) => <MovieBanner key={movies.id} data={movies}></MovieBanner>)}
            </Carousel>
            <Section>
                {/* movie now playing */}
                <MovieList movieCategory='New Release' loading={moviesNowPlaying? false : true}>
                    {moviesNowPlaying && moviesNowPlaying.map((movies: moviesData) => <MovieCard key={movies.id} data={movies}/>)}
                </MovieList>
                {/* tv shows */}
                <MovieList movieCategory='TV Show' loading={tvShow ? false :true}>
                    {tvShow && tvShow.map((tv: moviesData) => <MovieCard key={tv.id} data={tv}/>)}
                </MovieList>
                {moviesPopular && <MovieList movieCategory='Popular' loading={moviesPopular? false : true}>
                    {moviesPopular && moviesPopular.map((movie: moviesData) => <MovieCard key={movie.id} data={movie}/>)}
                </MovieList>}
            </Section>

            {/* load more component*/}
            <Section ref={loadRef}>
                {loadMore && <Loading loadingText="loading more movies for you..." />}
            </Section>
        </div>
    )
}

export default Home
