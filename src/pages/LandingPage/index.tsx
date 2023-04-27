import { useState } from "react";
import LandingPageLayoutMobile from "../../components/LandingPageLayoutMobile";
import LandingPageLayoutPC from "../../components/LandingPageLayoutPC";

function LandingPage() {
  const [width, setwidth] = useState(window.innerWidth);

  window.addEventListener("resize", (event) => setwidth(window.innerWidth));

  return (
    <>{width > 960 ? <LandingPageLayoutPC /> : <LandingPageLayoutMobile />}</>
  );
}

export default LandingPage;
