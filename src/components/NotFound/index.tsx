import { NotFoundContainer } from "./styledComponent"


const NotFound: React.FC<{errorMessage : string}> = ({errorMessage}) => {

    return(
        <NotFoundContainer>
            {errorMessage}
        </NotFoundContainer>
    )
}

export default NotFound