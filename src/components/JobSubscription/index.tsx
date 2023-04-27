import { useContext } from "react";
import { DevContext } from "../../providers/Dev/DevContext";
import { IJob } from "../../providers/User/UserContext";
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Container } from "./style"

interface JobSubscriptionProps{
    setMySubscription: React.Dispatch<React.SetStateAction<boolean>>
}

function JobSubscription({setMySubscription}: JobSubscriptionProps){
    const { getDevSubsList, devSub} = useContext(DevContext);
    
    return(
        <>
        <Container className="jobContainer">
          <div className="jobContainerHeader">
            <h2>Minhas Candidaturas</h2>
            <div className="buttonArrow">
              <button
                onClick={() => {
                  setMySubscription(false);
                  getDevSubsList();
                }}
              >
                <AiOutlineArrowLeft size={20} />
              </button>
            </div>
          </div>
          <div className="jobList">
            {devSub?.map((jobElem: IJob) => (                 
                <div key={jobElem.id} className="job">
                  <span>Você se candidatou a vaga:</span>
                  <div>
                    <h3>{jobElem.title}</h3>
                    <p>{jobElem.stacks.map((stack, index) => <span key={index} className="stack">{stack}</span>)}</p>
                    <span className="ticket">Não lido</span>
                  </div>
                </div>                 
            ))}
          </div>
        </Container>
      </>
    )
}

export default JobSubscription;