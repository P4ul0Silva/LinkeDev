import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import LandingPageComponent from "../LandingPageComponent";
import Header from "../Header";

function LandingPageLayoutPC() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header/>
      <LandingPageComponent>
        <section className="signUpSection">
          <p>
            Você é Dev? Procure vagas, converse com recrutadores e seja
            contratado!
          </p>
          <p>
            Uma comunidade gigante para conhecer que conecta devs e recruiters
            de todo o brasil em um só lugar!
          </p>
          <p>
            Como Recruiter você pode coversar com vários devs e achar aquele
            que mais se encaixa no perfil da sua empresa!
          </p>
          <div className="signUpDiv">
            <button className="signupBtn" onClick={() => navigate("/options")}>Cadastrar</button>
          </div>
        </section>
      </LandingPageComponent>
    </Container>
  );
}

export default LandingPageLayoutPC;
