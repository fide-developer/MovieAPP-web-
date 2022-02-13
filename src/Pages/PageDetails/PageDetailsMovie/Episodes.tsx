import { moviesData } from "../../../GeneralUse/Function/Api/type"
import { EpisodeContainer, VideoPlayer, ContentPlaceHolderBackground, PlayVideoButton, EpisodeDetail, EpisodeHeader, EpisodeTitle, PlaceHolderText, MovieDuration, EpisodeOverview } from "../PageDetailsTV/Episodes/EpisodeItem/styledComponent"
import {ReactComponent as Playbutton} from "../../../assets/play.svg"

const Episodes: React.FC<{data: moviesData}> = ({data}) => {

    return(
        <EpisodeContainer>
                <VideoPlayer>
                    {data ? <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} /> : <ContentPlaceHolderBackground />}
                    {data && <PlayVideoButton><Playbutton /></PlayVideoButton>}
                </VideoPlayer>
            
            <EpisodeDetail>
                <EpisodeHeader>
                    <EpisodeTitle>
                        {!data && <PlaceHolderText width="70%"><ContentPlaceHolderBackground/></PlaceHolderText>}
                        {data?.original_title}
                    </EpisodeTitle>
                    <MovieDuration>
                        {/* {timeFormating(data.)} */}
                    </MovieDuration>
                </EpisodeHeader>
                <EpisodeOverview>
                    {!data && <PlaceHolderText width="100%"><ContentPlaceHolderBackground/></PlaceHolderText>}
                    {!data && <PlaceHolderText width="100%"><ContentPlaceHolderBackground/></PlaceHolderText>}
                    {data.overview}
                </EpisodeOverview>
            </EpisodeDetail>
        </EpisodeContainer>
    )
}

export default Episodes