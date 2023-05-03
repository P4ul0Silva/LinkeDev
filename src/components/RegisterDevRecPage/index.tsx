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
      </Container>

      {value === "dev" && <DevForm />}
      {value === "recruiter" && <RecruiterForm />}
    </>
  );
};
export default RegisterDevRecPage;
