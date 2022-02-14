import { useEffect, useState } from "react"
import { getMovieCredit, getTVCredit } from "../../../GeneralUse/Function/Api"
import { cast } from "../../../GeneralUse/Function/Api/type"
import { LinkButton } from "../../../GeneralUse/StyledComponents/generalStyledComponent"
import { ContentPlaceHolderBackground, PlaceHolderText } from "../PageDetailsTV/Episodes/EpisodeItem/styledComponent"
import { CastDetailContainer, CasterGroup, CasterName } from "./styledComponent"

export const enum castType{
    TV, Movie
}
const CastDetail: React.FC<{ids?: number, type: castType}> = ({ids,type}) => {
    const [castDetailData, setCastDetailData] = useState<cast[]>()
    const [loadingState, setLoadingState] = useState<boolean>(false)
    useEffect(()=>{
        setLoadingState(true)
        
        if(ids)
        switch(type){
            case castType.Movie:
                getMovieCredit(ids)
                    .then((data)=> {
                        setLoadingState(false)
                        if(!data.success){
                            setCastDetailData(data.cast)
                        }
                    }).catch(rejected => {
                        setLoadingState(false)
                    })
                break
            case castType.TV:
                getTVCredit(ids)
                    .then((data)=> {
                        setLoadingState(false)
                        if(!data.success)
                        setCastDetailData(data.cast)
                    }).catch(rejected=>{
                        setLoadingState(false)
                    })
                break
        }
        
    },[ids])

    return(
        <CastDetailContainer>
            <h1>Cast :</h1>
            <CasterGroup>
                {loadingState && <PlaceHolderText width="150px"><ContentPlaceHolderBackground/></PlaceHolderText>}
                {loadingState && <PlaceHolderText width="150px"><ContentPlaceHolderBackground/></PlaceHolderText>}
                {loadingState && <PlaceHolderText width="150px"><ContentPlaceHolderBackground/></PlaceHolderText>}
                {castDetailData && castDetailData.slice(0,3).map((caster)=> <CasterName key={caster.id}>{caster.name}</CasterName>)}
            </CasterGroup>
            <LinkButton>More</LinkButton>
        </CastDetailContainer>
    )
}

export default CastDetail