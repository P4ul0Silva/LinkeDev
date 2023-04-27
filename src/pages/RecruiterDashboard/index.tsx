import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Button from "../../components/Button";
import DevsList from "../../components/DevsList";
import JobsList from "../../components/JobsList";
import SubscriptionsList from "../../components/SubscriptionsList";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilterRight} from 'react-icons/bs'
import { UserContext } from "../../providers/User/UserContext";
import { useContext } from "react";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import DevProfile from "../../components/ModalDevProfile";
import { DevContext } from "../../providers/Dev/DevContext";
import EditModalRecruiter from "../../components/EditModalRecruiter";
import { BiArrowBack } from "react-icons/bi";

function RecruiterDashboard() {
  const { logout, handleImageError } = useContext(GlobalContext);
  const { dev, getModalDevProfile, modalDevProfile } = useContext(DevContext);

  // const navigate = useNavigate();

  const {
    getRecruiterSubsList,
    getRecruiterJobsList,
    searchFilter,
    user,
    nav,
    setNav,
    modalEditRecruiter,
  } = useContext(UserContext);

  function jobs() {
    getRecruiterJobsList();
    setNav("jobsList");
  }
  function subscriptions() {
    getRecruiterSubsList();
    setNav("subsList");
  }
  
  // setNav('devsList')

  return (
    <>
      {user?.is_recruiter && (
        <Container>
          <Header />
          <div className="recruiterContainer">
            <Aside />
            <div className="recruiterMain">
              {nav === "Início" && (
                <div className="recruiterMainHeader">
                <div className="title">
                  <h2>Início</h2>
                </div>
                <nav>
                  <section className="buttons">
                    <Button buttonFunction={jobs}>Minhas Vagas</Button>
                    <Button buttonFunction={subscriptions}>Inscrições</Button>
                  </section>
                  <section className="search">
                    <input placeholder="Nome, Tecnologia..."
                           onChange={(e) => searchFilter(e.target.value)}
                           type="text" />
                    <button>
                      <AiOutlineSearch size={25} />
                    </button>
                  </section>
                  <section className="filter">
                    {/* <p>Filtrando por: </p> */}
                    <BsFilterRight size={25}/>
                    <select
                        onChange={(e) => searchFilter(e.target.value)}
                        className="filterOptions"
                      >
                        <option value="">Todos</option>
                        <option value="Júnior">Júnior</option>
                        <option value="Pleno">Pleno</option>
                        <option value="Sênior">Sênior</option>
                      </select>
                  </section>
                </nav>
              </div>
              )}
              <div className="recruiterMainList">
                <ul>
                    {nav !== "Início" && (
                      <div className="backArrow">
                      <BiArrowBack
                      className="btnArrowBack"
                      size={25}
                      onClick={() => setNav("Início")}/>
                    </div>
                    )}
                  {nav === "jobsList" && <JobsList />}
                  {nav === "subsList" && <SubscriptionsList />}
                  {nav === "Início" && <DevsList />}
                </ul>
              </div>
            </div>
          </div>
          {modalDevProfile && <DevProfile />}
          {modalEditRecruiter && <EditModalRecruiter />}
        </Container>
      )}
    </>
  );
}

export default RecruiterDashboard;
