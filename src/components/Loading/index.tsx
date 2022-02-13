import { LoadingAnimation, LoadingContainer, LoadingText } from "./styledComponent"


const Loading : React.FC<{loadingText: string}> = ({loadingText}) => {

    return(
        <LoadingContainer>
            <LoadingAnimation />
            <LoadingText>{loadingText}</LoadingText>
        </LoadingContainer>
    )
}

export default Loading