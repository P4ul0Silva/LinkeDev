import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import Logo from "../../assets/Logolight.svg"

function LandingPageLayoutMobile() {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <img alt="Link e Dev Logo" src={Logo}></img>
        <h2>
          Uma comunidade gigante para conhecer que conecta devs e recruiters de
          todo o brasil em um só lugar!
        </h2>
      </div>
      <div>
        <button onClick={() => navigate("/login")}>Entrar</button>
        <button onClick={() => navigate("/options")}>Cadastrar</button>
      </div>
    </Container>
  );
}

export default LandingPageLayoutMobile;
