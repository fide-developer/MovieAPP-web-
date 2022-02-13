import React, { useState } from "react"
import { useRef } from "react"
import { getTVEpisode } from "../../../../GeneralUse/Function/Api"
import { tvEpisode } from "../../../../GeneralUse/Function/Api/type"
import LazyLoad from "../../../../GeneralUse/Function/LazyLoad"
import { EpisodeContainer, EpisodeDetail, EpisodeHeader, EpisodeOverview, EpisodeTitle, MovieDuration, VideoPlayer } from "./styledComponent"


const EpisodeItem: React.FC<{tvId: number, episodeId: number, duration:number, seasonId: number}> = ({tvId,episodeId,duration, seasonId}) => {
    const [episodeData, setEpisodeData] = useState<tvEpisode>()

    const episodeRef = useRef(null)

    
    const timeFormating = (minute: number) => {
        if(minute < 60) return minute+" minutes"
        let correctMinute = minute % 60
        let hour = (minute-correctMinute) / 60

        return `${hour}h ${correctMinute}m`
    }

    //load content only when this component appear
    const loadContent = () => {
        getTVEpisode(tvId, episodeId, seasonId)
            .then((data)=> {
                setEpisodeData(data)
            })
    }
    LazyLoad(episodeRef,(entries, orbserver)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                loadContent()
                orbserver.disconnect()
            }
        });
    })

    return(
        <EpisodeContainer ref={episodeRef}>
            <VideoPlayer>

            </VideoPlayer>
            <EpisodeDetail>
                <EpisodeHeader><EpisodeTitle>{episodeData?.name}</EpisodeTitle><MovieDuration>{timeFormating(duration)}</MovieDuration></EpisodeHeader>
                <EpisodeOverview>{episodeData?.overview}</EpisodeOverview>
            </EpisodeDetail>
        </EpisodeContainer>
    )
}

export default React.memo(EpisodeItem)