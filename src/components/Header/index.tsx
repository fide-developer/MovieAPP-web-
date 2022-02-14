import { Link } from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/logo/logo.svg"
import { GroupMenu, HeaderContainer } from "./styledComponent"

const Header: React.FC = () => {
    
    return(
        <HeaderContainer>
            <Link to={{pathname: "/"}}>
                <Logo />
            </Link>
            <GroupMenu>
                
            </GroupMenu>
        </HeaderContainer>
    )
}

export default Header