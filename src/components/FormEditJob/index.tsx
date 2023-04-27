import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { IJob } from "../../providers/User/UserContext";
import { Form } from "./styles";
import InputStacks from "../InputStacks";
import { JobsContext } from "../../providers/Jobs/JobsContext";

interface IFormEditJobProps {
	job: IJob;
}

function FormEditJob({job}: IFormEditJobProps) {
	const { editJob } = useContext(JobsContext);

	const schema = yup.object({
		title: yup.string().required("O título é obrigatório"),
		description: yup.string().required("A descrição é obrigatória"),
		place: yup.string().required("O local é obrigatório"),
		salary: yup.string().required("O salário é obrigatório"),
		level: yup.string().required("O nível é obrigatório"),
		type: yup.string().required("O tipo é obrigatório"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IJob>({
		resolver: yupResolver(schema),
	});

	return (
		<Form onSubmit={handleSubmit(editJob)}>
			<InputStacks />
			<input type="hidden" {...register("id")} value={job.id} />
			<input type="hidden" {...register("stacks")} value={job.stacks} />
			<input type="text" id="title" placeholder="Título da vaga" {...register("title")} defaultValue={job.title} />
			{errors.title && <span className="error">{errors.title.message}</span>}
			<input type="text" id="description" placeholder="Descrição da vaga" {...register("description")} defaultValue={job.description} />
			{errors.description && <span className="error">{errors.description.message}</span>}
			<input type="text" id="place" placeholder="Local da vaga" {...register("place")} defaultValue={job.place} />
			{errors.place && <span className="error">{errors.place.message}</span>}
			<input type="text" id="salary" placeholder="Salário da vaga" {...register("salary")} defaultValue={job.salary} />
			{errors.salary && <span className="error">{errors.salary.message}</span>}
			<input type="text" id="level" placeholder="Nível da vaga" {...register("level")} defaultValue={job.level} />
			{errors.level && <span className="error">{errors.level.message}</span>}
			<input type="text" id="type" placeholder="Tipo da vaga" {...register("type")} defaultValue={job.type} />
			{errors.type && <span className="error">{errors.type.message}</span>}
			<button type="submit" className="submitButton">
				Editar Vaga
			</button>
		</Form>
	);
}

export default FormEditJob;
