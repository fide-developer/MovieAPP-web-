import { useCallback, useEffect, useState } from "react"
import { seasonType } from "../../../GeneralUse/Function/Api/type"
import EpisodeItem from "./EpisodeItem"
import SelectEpisode from "./SelectEpisode"
import { EpisodeList, EpisodesHeader, EpisodesListContainer, TitleEpisode } from "./styledComponent"


const Episodes: React.FC<{data: seasonType[], tvId: number, runtime:any[]}> = ({data, tvId, runtime}) => {
    const [selectedSeason, setSelectedSeason] = useState<number>(0)
    console.log(data[selectedSeason])
    // useEffect(()=>{

    // },[selectedSeason])
    
    return(
        <EpisodesListContainer>
            <EpisodesHeader>
                <TitleEpisode>Episodes</TitleEpisode>
                <SelectEpisode data={data} onSelected={setSelectedSeason} selectedValue={selectedSeason} />
            </EpisodesHeader>
            <EpisodeList>
                {[...Array(data[selectedSeason].episode_count)].map((eArray, index)=> <EpisodeItem key={index} seasonId={selectedSeason} tvId={tvId} duration={runtime[0]} episodeId={index+1}/>)}
            </EpisodeList>
        </EpisodesListContainer>
    )
}

export default Episodes
