import React from "react"
import { SynopsisContainer, SynopsisDetails } from "./styledComponent"


const Synopsis: React.FC<{synopsisText : string}> = ({synopsisText,children}) => {

    return(
        <SynopsisContainer>
            <h1>Synopsis</h1>
            <SynopsisDetails>
                {synopsisText}
                {children}
            </SynopsisDetails>
        </SynopsisContainer>
    )
}

export default Synopsis