import React, { useEffect, useState } from "react"
import { useRef } from "react"
import { getTVEpisode, getTVEpisodeImage } from "../../../../../GeneralUse/Function/Api"
import { tvEpisode, tvImageData } from "../../../../../GeneralUse/Function/Api/type"
import LazyLoad from "../../../../../GeneralUse/Function/LazyLoad"
import {ReactComponent as Playbutton} from "../../../../../assets/play.svg"

import { ContentPlaceHolderBackground, EpisodeContainer, EpisodeDetail, EpisodeHeader, EpisodeOverview, EpisodeTitle, MovieDuration, PlaceHolderText, PlayVideoButton, VideoPlayer } from "./styledComponent"


const EpisodeItem: React.FC<{tvId: number, episodeId: number, duration:number, seasonId: number}> = ({tvId,episodeId,duration, seasonId}) => {
    const [episodeData, setEpisodeData] = useState<tvEpisode>()
    const [imgData, setImgData] = useState<tvImageData>()

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

        
        getTVEpisodeImage(tvId, seasonId, episodeId)
            .then(data=>{
                if(data.stills.length===0) return
                setImgData(data.stills[0])
            })
    }
    LazyLoad(episodeRef,(entries, orbserver)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                setTimeout(()=>{
                    loadContent()
                },500)
                orbserver.disconnect()
            }
        });
    })

    return(
        <EpisodeContainer ref={episodeRef}>
                <VideoPlayer aspectRatio={imgData?.aspect_ratio}>
                    {imgData ? <img src={`https://image.tmdb.org/t/p/w200${imgData.file_path}`} /> : <ContentPlaceHolderBackground />}
                    {imgData && <PlayVideoButton><Playbutton /></PlayVideoButton>}
                </VideoPlayer>
            
            <EpisodeDetail>
                <EpisodeHeader>
                    <EpisodeTitle>
                        {!episodeData && <PlaceHolderText width="70%"><ContentPlaceHolderBackground/></PlaceHolderText>}
                        {episodeData?.name}
                    </EpisodeTitle>
                    <MovieDuration>
                        {timeFormating(duration)}
                    </MovieDuration>
                </EpisodeHeader>
                <EpisodeOverview>
                    {!episodeData && <PlaceHolderText width="100%"><ContentPlaceHolderBackground/></PlaceHolderText>}
                    {!episodeData && <PlaceHolderText width="100%"><ContentPlaceHolderBackground/></PlaceHolderText>}
                    {episodeData?.overview}
                </EpisodeOverview>
            </EpisodeDetail>
        </EpisodeContainer>
    )
}

export default React.memo(EpisodeItem)