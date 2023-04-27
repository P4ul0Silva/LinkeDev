import { useContext } from "react";
import { useForm } from "react-hook-form";
import {  UserContext } from "../../providers/User/UserContext";
import * as yup from "yup";
import { Container, Form, Header } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import  { IEditRecruiterForm }  from "../../providers/User/UserContext"

const EditModalRecruiter= () => {
  const { user, editProfileRecruiter, setModalEditRecruiter } = useContext(UserContext);
  const { handleImageError } = useContext(GlobalContext);

  const formEditRecruiter = yup.object().shape({
    name: yup.string().optional(),
    email: yup.string().email("email inválido").optional(),
	company: yup.string().optional(),
    avatar_URL: yup.string().url("jpg ou png").optional(),
	social: yup.string().url().optional()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditRecruiterForm>({
    resolver: yupResolver(formEditRecruiter),
  });

  return (
		<Container>
			<div className="modal">
				<Header>
					<img
						className="vectorBack"
						src="./vector_edit.svg"
						alt="Voltar"
						onClick={() => setModalEditRecruiter(null)}
					/>
					<h2>Editar Perfil</h2>
				</Header>
				<Form onSubmit={handleSubmit(editProfileRecruiter)}>
					<div className="divModal">
						<div className="formdev">
							<label htmlFor="name">Nome</label>
							<input type="text" id="name" defaultValue={user?.name} {...register("name")} />
							<p>{errors.name?.message}</p>

							<label htmlFor="email">Email</label>
							<input type="text" id="email" defaultValue={user?.email} {...register("email")} />
							<p>{errors.email?.message}</p>
							<label htmlFor="title">Empresa</label>
							<input type="text" id="company" defaultValue={user?.company} {...register("company")} />
							<p>{errors.company?.message}</p>
							<label htmlFor="title">Contato (Insira um link)</label>
							<input type="text" id="social" defaultValue={user?.social} {...register("social")} />
							<p>{errors.social?.message}</p>
							
						</div>

						<div className="formdev2">
							<img
								className="perfilDev"
								defaultValue={user?.avatar_URL}
								src={user?.avatar_URL || "../../assets/user.png"}
								alt="Perfil Dev"
								onError={handleImageError}
							/>

							<label htmlFor="url">Escolher url da imagem</label>
							<input type="text" id="url" defaultValue={user?.avatar_URL} {...register("avatar_URL")} />

							<p>{errors.avatar_URL?.message}</p>

						
						</div>
					</div>
					<div className="divButton">
						<button className="buttonEdit" type="submit">
							Atualizar
						</button>
					</div>
				</Form>
			</div>
		</Container>
  );
};

export default EditModalRecruiter;
