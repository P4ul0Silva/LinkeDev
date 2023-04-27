import { useContext } from "react";
import { UserContext } from "../../providers/User/UserContext";
import { JobsContainer } from "./styles";
import ModalEditJob from "../ModalEditJob";
import ModalCreateJob from "../ModalCreateJob";

const JobsList = () => {
  function devsList() {
    setNav("Início");
  }

  const { nav, setNav, jobList } = useContext(UserContext);
  return (
    <>
      <ModalCreateJob />
      <JobsContainer>
        {jobList.map((job) => (
          <li key={job.id}>
            <h1>{job.title}</h1>
            <p>N° aplicações: {job?.candidates?.length}</p>
            <p>{job.place}</p>
            <p>{job.salary}</p>
            <p>{job.level}</p>
            <p>{job.type}</p>
            <p>{job.stacks}</p>
            <ModalEditJob job={job} />
          </li>
        ))}
      </JobsContainer>
    </>
  );
};

export default JobsList;
