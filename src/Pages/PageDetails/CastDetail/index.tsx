import { LinkButton } from "../../../GeneralUse/StyledComponents/generalStyledComponent"
import { CastDetailContainer, CasterName } from "./styledComponent"


const CastDetail: React.FC = () => {

    return(
        <CastDetailContainer>
            <h1>Cast</h1>
            <CasterName>Gal Gadot</CasterName>
            <CasterName>Kristen Wing</CasterName>
            <CasterName>Chrise Pine</CasterName>

            <LinkButton>More</LinkButton>
        </CastDetailContainer>
    )
}

export default CastDetail