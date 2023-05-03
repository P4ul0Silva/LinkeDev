import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../providers/User/UserContext";
import { Container, Form } from "./style";
import RegisterDevRecPage from "../RegisterDevRecPage";
import InputStacks from "../InputStacks";
import Header from "../Header";
import LandingPageComponent from "../LandingPageComponent";

interface IRegisterDev {
  name: string;
  email: string;
  password: string;
  verPassword: string;
  level?: string;
  title: string;
  stacks?: string[];
  social?: string;
  bio?: string;
  avatar_URL?: string;
}
const DevForm = () => {
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
    level: yup.string().required("escolha um dos níveis"),
    title: yup.string().required("campo obrigatório"),
    bio: yup.string().required("bio obrigatória"),
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
  } = useForm<IRegisterDev>({
    resolver: yupResolver(formRecruiter),
  });

  return (
    <>
      <Container page={page}>
        <Header/>
          <LandingPageComponent>
          <div className="divRegister">
            <h2>Cadastro de Dev!</h2>

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
                type="text"
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

              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                placeholder="Ex: Desenvolvedor Frontend"
                {...register("title")}
              />
              <p>{errors.title?.message}</p>

              <label htmlFor="level">Nível</label>
              <select id="level" {...register("level")}>
                <option value="item">---selecione um nível---</option>
                <option value="Júnior">Nível Júnior</option>
                <option value="Pleno">Nível Pleno</option>
                <option value="Sênior">Nível Sênior</option>
              </select>

              <label htmlFor="stacks">Tecnologias que você domina</label>
              <InputStacks />
              <p>{errors.stacks?.message}</p>

              <label htmlFor="bio">Bio</label>
              <input
                type="text"
                id="bio"
                placeholder="Digite sua bio"
                {...register("bio")}
              />
              <p>{errors.bio?.message}</p>

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
          </LandingPageComponent>
      </Container>
      {backDev && <RegisterDevRecPage />}
    </>
  );
};

export default DevForm;
