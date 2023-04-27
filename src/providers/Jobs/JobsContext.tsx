import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { DevContext } from "../Dev/DevContext";
import { UserContext } from "../User/UserContext";
import { IJob } from "../User/UserContext";

export const JobsContext = createContext({} as JobsProviderData);

interface JobsProps {
	children: ReactNode;
}

interface JobsProviderData {
	jobApplication: (id: string) => void;
	job: JobData | null;
	getJobModal: (id: string) => void;
	modalJobDetail: boolean;
	setModalJobDetail: React.Dispatch<React.SetStateAction<boolean>>;
	jobList: JobData[] | null;
	editJob: (job: IJob) => void;
	filteredJobs: JobData[] | null;
	handleSearchJob: (search: string) => void;
	handleFilterByDate: (search: string) => void;
}

export interface JobData {
  title: string;
  description: string;
  place: string;
  salary: string;
  level: string;
  stacks: string[];
  type: string;
  reputation: string;
  candidates: any[];
  userId: string;
  date: string;
  id: string;
}

function JobsProvider({ children }: JobsProps) {
	const [job, setJob] = useState<JobData | null>(null);
	const [jobList, setJobList] = useState<JobData[] | null>([]);
	const [modalJobDetail, setModalJobDetail] = useState(false);
  	const [filteredJobs, setFilteredJobs] = useState<JobData[] | null>([])
	const { tags } = useContext(UserContext);
	const { getDev } = useContext(DevContext);
	const { user } = useContext(UserContext);

	useEffect(() => {
		const getJobList = async () => {
			await api
				.get("jobs")
				.then((res) => {
					setJobList(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		getJobList();
	}, [filteredJobs]);

	const getJobAndRecruiter = async (id: string) => {
		await api
			.get(`jobs/${id}`)
			.then((res) => {
				setJob(res.data);
				return res;
			})
			.then((res) => {
				getDev(res.data.userId);
			})
			.catch((err) => console.error(err));
	};

	function getJobModal(id: string) {
		getJobAndRecruiter(id);
		setModalJobDetail(true);
	}

	async function jobApplication(id: string) {
		const repeated = job?.candidates.find((candidate) => candidate.id === user?.id);
		if (repeated) {
			return toast.error("Você já se candidatou para essa vaga");
		}
		const data = { candidates: [...job?.candidates!, user] };
		await api
			.patch(`jobs/${id}`, data)
			.then((res) => {
				toast.success("Aplicação enviada com sucesso. Boa sorte!");
				getJobAndRecruiter(id);
			})
			.catch((err) => {
				toast.error("Ops! Algo deu errado.");
			});
	}


  const handleSearchJob = (search: string) => {
    const newList = jobList?.filter((job) => {
		const jobTech = job.stacks.find((stack) => stack.toLowerCase().includes(search))
      if(job.title.toLowerCase().includes(search)
      || job.description.toLowerCase().includes(search)
      || job.level.toLowerCase().includes(search)
      || job.place.toLowerCase().includes(search)
	  || jobTech){
        return true
      }
      return false
    })
    setFilteredJobs(newList!)	
  }


  const handleFilterByDate = (search: string) => {
	let newList: JobData[] | undefined;
	if(search === "Mais antigas"){
		newList = jobList?.sort((a, b) => (a.date < b.date ? -1 : 1))		
	}
	if(search === "Mais recentes"){
		newList = jobList?.sort((a, b) => (a.date < b.date ? 1 : -1))		
	}
	setFilteredJobs(newList!)		
  }

	const editJob = (job: IJob) => {
		api.patch(`/jobs/${job.id}`, {
			title: job.title,
			description: job.description,
			place: job.place,
			salary: job.salary,
			level: job.level,
			stacks: [job.stacks, ...tags],
			type: job.type,
		})
			.then((response) => {
				toast.success("Vaga atualizada com sucesso!");
			})
			.catch((err) => {
				toast.error("Erro ao atualizar vaga!");
			});
	};

	return (
		<JobsContext.Provider
			value={{
				job,
				getJobModal,
				modalJobDetail,
				setModalJobDetail,
				jobList,
				jobApplication,
				handleSearchJob,
				filteredJobs,
				editJob,
				handleFilterByDate
			}}
		>
			{children}
		</JobsContext.Provider>
	);
}

export default JobsProvider;
