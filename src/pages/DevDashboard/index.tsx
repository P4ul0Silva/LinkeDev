import { useContext, useState } from "react";
import ModalJobDetails from "../../components/ModalJobDetails";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import { JobsContext } from "../../providers/Jobs/JobsContext";
import { UserContext } from "../../providers/User/UserContext";
import { Container } from "./style";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCashCoin, BsFillLayersFill } from "react-icons/bs";
import { DevContext } from "../../providers/Dev/DevContext";
import EditModalProfileDev from "../../components/EditModalPerfilDev";
import JobSubscription from "../../components/JobSubscription";

function DevDashboard() {
  const { user } = useContext(UserContext);
  const { logout } = useContext(GlobalContext);
  const { getDevSubsList, editModalDev } = useContext(DevContext);
  const {
    getJobModal,
    modalJobDetail,
    jobList,
    handleSearchJob,
    filteredJobs,
    handleFilterByDate,
  } = useContext(JobsContext);
  const [mySubscription, setMySubscription] = useState(false);
  const style = { fontSize: "18px", color: "#45205C" };

  return !user?.is_recruiter ? (
    <Container>
      <Header />
      <section className="mainContent">
        <Aside />
        {mySubscription ? (
          <JobSubscription setMySubscription={setMySubscription} />
        ) : (
          <div className="jobContainer">
            <div className="jobContainerHeader">
              <h2>Vagas</h2>
              <nav>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setMySubscription(true);
                      getDevSubsList();
                    }}
                  >
                    Meus envios
                  </button>
                </div>
                <div className="search">
                  <input
                    placeholder="Nome, Tecnologia..."
                    type="text"
                    onChange={(e) => handleSearchJob(e.target.value)}
                  />
                  <button className="searchButton">
                    <AiOutlineSearch size={25} />
                  </button>
                </div>
                <div className="filter">
                  Filtre por:
                  <select onChange={(e) => handleFilterByDate(e.target.value)}>
                    <option value="">Todos</option>
                    <option value="Mais recentes">Mais recentes</option>
                    <option value="Mais antigas">Mais antigas</option>
                  </select>
                </div>
              </nav>
            </div>
            <section className="jobList">
              {(filteredJobs?.length! > 0 ? filteredJobs : jobList)?.map(
                (jobElem) => (
                  <div
                    key={jobElem.id}
                    onClick={() => getJobModal(jobElem.id)}
                    className="card"
                  >
                    <div className="right">
                      <span>{jobElem.date}</span>
                      <h2>{jobElem.title}</h2>
                      <p>{jobElem.description}</p>
                      <p>{jobElem.type}</p>
                    </div>
                    <div className="left">
                      <div className="textDescription">
                        <span>
                          <MdLocationOn style={style} />
                          {jobElem.place}
                        </span>
                        <span>
                          <BsCashCoin style={style} />
                          {Number(jobElem.salary).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                        <span>
                          <BsFillLayersFill style={style} />
                          {jobElem.stacks.map((stack, index) => (
                            <span key={index} className="stack">
                              {" "}
                              {stack}{" "}
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </section>
          </div>
        )}
      </section>
      {modalJobDetail && <ModalJobDetails />}
      {editModalDev && <EditModalProfileDev />}
    </Container>
  ) : (
    <>{logout()}</>
  );
}

export default DevDashboard;
