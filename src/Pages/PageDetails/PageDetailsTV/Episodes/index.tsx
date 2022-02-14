import { useCallback, useEffect, useState } from "react"
import { seasonType } from "../../../../GeneralUse/Function/Api/type"
import EpisodeItem from "./EpisodeItem"
import SelectEpisode from "./SelectEpisode"
import { EpisodeList, EpisodesHeader, EpisodesListContainer, TitleEpisode } from "./styledComponent"


const Episodes: React.FC<{data: seasonType[], tvId: number, runtime:any[]}> = ({data, tvId, runtime}) => {
    const [selectedSeason, setSelectedSeason] = useState<number>(0)
    useEffect(()=>{
        setSelectedSeason(0)
    },[tvId])
    return(
        <EpisodesListContainer>
            <EpisodesHeader>
                <TitleEpisode>Episodes</TitleEpisode>
                <SelectEpisode data={data} onSelected={setSelectedSeason} selectedValue={selectedSeason} />
            </EpisodesHeader>
            <EpisodeList>
                {data.map((sesion, index)=> {
                    let sesionNumber = sesion.season_number
                    if(data.length === 1 && sesion.season_number === 1) sesionNumber = 0
                    if(!(sesionNumber === selectedSeason)) return
                    return(
                        [...Array(data[selectedSeason].episode_count)].map((val, index) => {
                            return(
                                <EpisodeItem key={sesion.season_number+""+index} seasonId={sesion.season_number} tvId={tvId} duration={runtime[0]} episodeId={index+1}/>
                            )
                        })
                    )
                })}
            </EpisodeList>
        </EpisodesListContainer>
    )
}

export default Episodes
