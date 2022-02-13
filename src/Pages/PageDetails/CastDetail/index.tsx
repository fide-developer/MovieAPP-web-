import { useEffect, useState } from "react"
import { getMovieCredit, getTVCredit } from "../../../GeneralUse/Function/Api"
import { cast } from "../../../GeneralUse/Function/Api/type"
import { LinkButton } from "../../../GeneralUse/StyledComponents/generalStyledComponent"
import { CastDetailContainer, CasterName } from "./styledComponent"

export const enum castType{
    TV, Movie
}
const CastDetail: React.FC<{ids?: number, type: castType}> = ({ids,type}) => {
    const [castDetailData, setCastDetailData] = useState<cast[]>()
    useEffect(()=>{
        if(ids)
        switch(type){
            case castType.Movie:
                getMovieCredit(ids)
                    .then((data)=> {
                        setCastDetailData(data.cast)
                    })
                break
            case castType.TV:
                getTVCredit(ids)
                    .then((data)=> {
                        setCastDetailData(data.cast)
                    })
                break
        }
        
    },[ids])

    return(
        <CastDetailContainer>
            <h1>Cast :</h1>
            {castDetailData && castDetailData.slice(0,3).map((caster)=> <CasterName key={caster.id}>{caster.name}</CasterName>)}
            <LinkButton>More</LinkButton>
        </CastDetailContainer>
    )
}

export default CastDetail