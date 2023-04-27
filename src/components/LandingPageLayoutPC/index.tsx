import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import Logo from "../../assets/LogoPC_light.svg"
import MainImage from "../../assets/newLogoLinke.svg"

function LandingPageLayoutPC() {
  const navigate = useNavigate();

  return (
    <Container>
      <section className="headerLanding">
        <div>
          <img src={Logo} alt="Logo LinkeDev" />
          <h3>A maior plataforma de contratações tech!</h3>
        </div>
        <div>
          <button onClick={() => navigate("/login")}>Entrar</button>
        </div>
      </section>

      <section className="mainLanding">
        <div>
          <img src={MainImage} alt="logo Login" />
        </div>
        <div>
          <p>
            Você é Dev? Procure vagas, converse com recrutadores e seja
            contratado!
          </p>
          <p>
            Uma comunidade gigante para conhecer que conecta devs e recruiters
            de todo o brasil em um só lugar!
          </p>
          <p>
            Como Recruiter você pode coversar com vários techs e achar aquele
            que mais se encaixa no perfil da sua empresa!
          </p>
          <button className="signupBtn" onClick={() => navigate("/options")}>Cadastrar</button>
        </div>
      </section>
    </Container>
  );
}

export default LandingPageLayoutPC;
