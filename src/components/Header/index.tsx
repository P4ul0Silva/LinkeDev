import { HeaderStyle } from "./style";
import logo from "../../assets/LogoPC_light.svg"
import Button from "../Button";
import { useContext } from "react";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import Dropdown from "../Dropdown";
import { useLocation } from 'react-router-dom'
import { CiLogout } from 'react-icons/ci'
import { useNavigate } from "react-router-dom";

function Header(){

    const { logout } = useContext(GlobalContext);
    const location = useLocation();
    const navigate = useNavigate();

    return(
        <HeaderStyle className="container">
                <img src={logo} alt="Logotipo linkedev" />
                {location.pathname === "/" && (
                    <button type="button" className="signinBtn" onClick={() => navigate("/login")}>Entrar</button>
                )}
                {location.pathname === "/devDashboard" && (
                    // <Button buttonFunction={logout}><CiLogout size={18}/></Button>
                    <button type="button" className="logoutBtn" onClick={() => logout()}><CiLogout size={18}/></button>
                )}
                {location.pathname === "/recruiterDashboard" && (
                    // <Button buttonFunction={logout}><CiLogout size={18}/></Button>
                    <button type="button" className="logoutBtn" onClick={() => logout() }><CiLogout size={18}/></button>
                )}
        </HeaderStyle>
    )
}

export default Header;