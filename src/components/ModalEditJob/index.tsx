import { useContext, useState } from "react";
import { UserContext } from "../../providers/User/UserContext";
import { HeaderModal, Container } from "./style";
import { IJob } from "../../providers/User/UserContext";
import FormEditJob from "../FormEditJob";

interface IModalEditJobProps {
	job: IJob;
}

export default function ModalEditJob({ job }: IModalEditJobProps) {
	const [showModal, setShowModal] = useState(false);
	const { setTags } = useContext(UserContext);
	const handleModal = () => {
		setShowModal(!showModal);
		setTags([]);
	};

	return showModal ? (
		<Container>
			<div className="modalFrame">
				<div className="modal-body">
					<HeaderModal>
						<h3>Editando Nova Vaga</h3>
						<button className="closeButton" onClick={handleModal}>
							X
						</button>
					</HeaderModal>
					<main>
						<FormEditJob job={job} />
					</main>
				</div>
			</div>
		</Container>
	) : (
		<>
			{null}
			<button className="openButton" onClick={handleModal}>
				Editar Vaga
			</button>
		</>
	);
}
