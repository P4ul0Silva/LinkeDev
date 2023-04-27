import { Container } from "./style";
import logo from "../../assets/Logolight.svg"
import Button from "../Button";
import { useContext } from "react";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import Dropdown from "../Dropdown";
import { useLocation } from 'react-router-dom'
import { CiLogout } from 'react-icons/ci'

function Header(){

    const { logout } = useContext(GlobalContext);
    const location = useLocation();
    return(
        <Container>
            <div className="container">
                <img src={logo} alt="Logotipo linkedev" />
                
                <Dropdown />
                
                <div className="button">                  
                    <Button buttonFunction={logout}><CiLogout size={18}/></Button>
                </div>
            </div>
        </Container>
    )
}

export default Header;