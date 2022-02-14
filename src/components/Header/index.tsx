import {ReactComponent as Logo} from "../../assets/logo/logo.svg"
import { GroupMenu, HeaderContainer } from "./styledComponent"

const Header: React.FC = () => {
    
    return(
        <HeaderContainer>
            <Logo />
            <GroupMenu>
                
            </GroupMenu>
        </HeaderContainer>
    )
}

export default Header