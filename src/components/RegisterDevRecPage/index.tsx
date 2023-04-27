import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DevForm from "../RegisterDevForm";
import RecruiterForm from "../RegisterRecruiterForm";
import { Container, Div, Header } from "./style";
import Logo from "../../assets/LogoPC_light.svg"

const RegisterDevRecPage = () => {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <Container page={page}>
        <Header>
          <img className="logoLinke" src={Logo} alt="LinkeDev" />
        </Header>
        <div className="div">
          <div className="divImgDesktop">
            <img
              className="logoLinke2"
              src={Logo}
              alt="LinkeDev"
            />
            <h3>A maior plataforma de contratações tech!</h3>
            <img
              className="imgLogin"
              src="./newLogoLinke.svg"
              alt="Logo Page"
            />
          </div>

          <Div>
            <div className="text">
              <h2>Esse é o primeiro passo para uma grande experiência.</h2>
              <h4>
                Você é um
                <span className="optionDev"
                  onClick={() => {
                    setValue("dev");
                    setPage(false);
                  }}
                >
                  Dev
                </span>
                ou
                <span className="optionRecruiter"
                  onClick={() => {
                    setValue("recruiter");
                    setPage(false);
                  }}
                >
                  Recruiter
                </span>
                ?
              </h4>
              <button className="buttonBack" onClick={() => navigate("/")}>
                voltar
              </button>
            </div>
          </Div>
        </div>
        {/* <div className="teste">
          <img className="vector" src="./vector.svg" alt="Imagem de background mostra uma moça selecionando candidatos" />
        </div> */}
      </Container>

      {value === "dev" && <DevForm />}
      {value === "recruiter" && <RecruiterForm />}
    </>
  );
};
export default RegisterDevRecPage;
