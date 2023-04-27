import { ContainerModal, Container } from "./style";
import {
  MdPlace,
  MdEmojiTransportation,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { BsStackOverflow, BsCalendarWeek } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Button from "../Button";
import { useContext } from "react";
import { JobsContext } from "../../providers/Jobs/JobsContext";
import { DevContext } from "../../providers/Dev/DevContext";
import { GlobalContext } from "../../providers/Global/GlobalContext";

function ModalJobDetails() {
  const style = { fontSize: "22px", color: "#5B2E76" };
  const { job, setModalJobDetail, jobApplication } = useContext(JobsContext);
  const { dev } = useContext(DevContext);
  const { handleImageError } = useContext(GlobalContext);

  return (
		<ContainerModal>
			<Container>
				<header>
					<img
						src={dev?.avatar_URL || "../../assets/user.png"}
						onError={handleImageError}
						alt="Avatar do usuário"
					/>

					<div>
						<span>{dev?.name} está procurando por um...</span>
						<h1>{job?.title}</h1>
					</div>

					<button className="buttonClose" onClick={() => setModalJobDetail(false)}>
						<GrClose />
					</button>
				</header>

				<div className="modalContent">
					<section className="jobDescription">
						<h2>Resumo</h2>
						<p>{job?.description}</p>
						<p>
							<BsStackOverflow style={style} />{" "}
							{job?.stacks.map((stack, index) => (
								<span className="stack" key={index}>
									{stack}
								</span>
							))}{" "}
						</p>
					</section>

					<section className="jobDetails">
						<div>
							<p>
								<AiOutlineThunderbolt style={style} /> {job?.level}
							</p>
							<p>
								<MdPlace style={style} /> {job?.place}
							</p>
							<p>
								<MdEmojiTransportation style={style} />
								{job?.type}
							</p>
							<p>
								<MdOutlineAttachMoney style={style} /> {job?.salary},00
							</p>
							<p>
								<BsCalendarWeek style={style} /> {job?.date}
							</p>
						</div>

						<Button buttonFunction={() => jobApplication(job?.id!)}>Aplicar</Button>
					</section>
				</div>
			</Container>
		</ContainerModal>
  );
}

export default ModalJobDetails;
