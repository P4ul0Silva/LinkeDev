import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../providers/User/UserContext";
import { Container, Form, Header } from "./style";
import RegisterDevRecPage from "../RegisterDevRecPage";

interface IRegisterRecruiter {
  name: string;
  email: string;
  password: string;
  verPassword: string;
  company: string;
  social: string;
  avatar_URL: string;
}
const RecruiterForm = () => {
  const { handleRegister } = useContext(UserContext);
  const [backDev, setBackDev] = useState(false);
  const [page, setPage] = useState(true);

  const formRecruiter = yup.object().shape({
    name: yup.string().required("nome obrigatório"),
    email: yup.string().email("email inválido").required("email obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve conter pelo menos 8 caracteres")
      .matches(
        new RegExp("^(?=.*[a-za-z])(?=.*[0-9])(?=.*[!@#$%^&*])"),
        "A senha deve conter letras, números e simbolos"
      )
      .required("senha obrigatória"),
    verPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .equals([yup.ref("password"), null], "A senha não corresponde"),
    company: yup.string().required("o campo empresa é obrigatório"),
    social: yup
      .string()
      .url("url inválido")
      .required("campo social obrigatório"),
    avatar_URL: yup.string().url("url inválido").required("campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterRecruiter>({
    resolver: yupResolver(formRecruiter),
  });

  return (
    <>
      <Container page={page}>
        <Header>
          <img className="logoLinke" src="./LogoPC_light.svg" alt="LinkeDev" />
        </Header>
        <div className="div">
          <div className="divImgDesktop">
            <img className="logoLinke2" src="./LogoPC_light.svg" alt="LinkeDev" />
            <h3>A maior plataforma de contratações tech!</h3>
            <img
              className="imgLogin"
              src="./newLogoLinke.svg"
              alt="Logo Login"
            />
          </div>

          <div className="divRegister">
            <h2>Cadastro de Tech Recruiter!</h2>

            <Form onSubmit={handleSubmit(handleRegister)}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="exemplo@email.com"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>

              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>

              <label htmlFor="verPassword">Confirmar Senha</label>
              <input
                type="password"
                id="verpassword"
                placeholder="Confirmar senha"
                {...register("verPassword")}
              />
              <p>{errors.verPassword?.message}</p>

              <label htmlFor="company">Empresa</label>
              <input
                type="text"
                id="company"
                placeholder="Digite o nome da sua empresa"
                {...register("company")}
              />
              <p>{errors.company?.message}</p>

              <label htmlFor="social">Contato (Insira um link)</label>
              <input
                type="text"
                id="social"
                placeholder="Coloque aqui o link do seu social"
                {...register("social")}
              />
              <p>{errors.social?.message}</p>

              <label htmlFor="avatar">Sua melhor foto (Insira um link)</label>
              <input
                type="text"
                id="avatar"
                placeholder="Coloque o link para seu avatar de perfil"
                {...register("avatar_URL")}
              />
              <p>{errors.avatar_URL?.message}</p>

              <div className="back">
                <button
                  className="buttonBack"
                  onClick={() => {
                    setBackDev(true);
                    setPage(false);
                  }}
                >
                  voltar
                </button>
                <button className="buttonRegister" type="submit">
                  Cadastrar
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
      {backDev && <RegisterDevRecPage />}
    </>
  );
};

export default RecruiterForm;
