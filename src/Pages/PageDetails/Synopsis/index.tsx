import { SynopsisContainer, SynopsisDetails } from "./styledComponent"


const Synopsis: React.FC<{synopsisText : string}> = ({synopsisText}) => {

    return(
        <SynopsisContainer>
            <h1>Synopsis</h1>
            <SynopsisDetails>
                {synopsisText}
            </SynopsisDetails>
        </SynopsisContainer>
    )
}

export default Synopsis