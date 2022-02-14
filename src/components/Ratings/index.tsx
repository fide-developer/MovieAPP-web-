import { RatingContainer } from "./styledComponent"
import {ReactComponent as RatingFull} from '../../assets/rating_full.svg'
import {ReactComponent as RatingNone} from '../../assets/rating_none.svg'
import {ReactComponent as RatingHalf} from '../../assets/rating_half.svg'
import { useEffect } from "react"


const Ratings : React.FC<{value:number}> = ({value}) => {
    useEffect(()=>{
        // check somthing
        let string = value.toString().split('.')

    },[])

    return(
        <RatingContainer>
                    <RatingFull />
                    <RatingFull />
                    <RatingFull />
                    <RatingFull />
                    <RatingFull />
        </RatingContainer>
    )
}

export default Ratings