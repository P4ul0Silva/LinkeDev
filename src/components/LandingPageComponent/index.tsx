import { Container } from "./style";
import MainImage from "../../assets/newLogoLinke.svg"

interface LandingPageProps {
  children?: React.ReactNode
}

function LandingPageComponent({ children }: LandingPageProps) {
  
  return (
    <Container className="mainLanding">
          <div className="landingImageContainer">
            <img className="landingImage" src={MainImage} alt="logo Login" />
          </div>
          {children}
    </Container>
  );
}

export default LandingPageComponent;
