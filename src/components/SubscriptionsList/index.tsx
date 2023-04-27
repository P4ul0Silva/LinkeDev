import { Key, useContext } from "react";
import { UserContext } from "../../providers/User/UserContext";
import { SubsContainer } from "./styles";
import { BiArrowBack } from "react-icons/bi";

const SubscriptionsList = () => {

  const { setNav, recruiterSubs} = useContext(UserContext);
  return (
    <SubsContainer>
      {recruiterSubs.map((subs, i: Key | null | undefined) => (
        <li key={`${subs.title}${i}`}>
          <h1>{subs.name}</h1>
        </li>
      ))}
    </SubsContainer>
  );
};

export default SubscriptionsList;
