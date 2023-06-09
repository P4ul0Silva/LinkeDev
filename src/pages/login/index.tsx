import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../providers/User/UserContext";
import { Container, Form} from "./style";
import { useNavigate } from "react-router-dom";
import LandingPageComponent from "../../components/LandingPageComponent";
import Header from "../../components/Header";

interface IRegister {
  name: string;
  email: string;
  password: string;
}

const Login = () => {
  const { handleLogin } = useContext(UserContext);
  const [page, setPage] = useState(true);

  const formularioCadastro = yup.object().shape({
    email: yup.string().email("e-mail inválido").required("e-mail obrigatório"),
    password: yup
      .string()
      .min(6, "no minimo 8 caracteres")
      .required("senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(formularioCadastro),
  });

  const navigate = useNavigate();

  return (
    <>
      <Container page={page}>
        <Header/>
        <LandingPageComponent>
          <div className="divLogin">
          <h3>A maior plataforma de contratações tech!</h3>
            <h2>Login</h2>

            <Form onSubmit={handleSubmit(handleLogin)}>
              <label htmlFor="email">Email</label>
              <input
                autoComplete="email"
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

              <div className="back">
                <button className="buttonBack" type="button" onClick={() => navigate("/")}>
                  voltar
                </button>
                <button className="buttonLogin" type="submit">
                  Entrar
                </button>
              </div>
            </Form>
          </div>
        </LandingPageComponent>
      </Container>
    </>
  );
};

export default Login;
