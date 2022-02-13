import Logo from "../../assets/logo/logo.png"
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