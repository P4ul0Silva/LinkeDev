import { ReactNode } from "react";
import { Container } from "./style";

interface ButtonProps {
  children: ReactNode | String;
  buttonFunction: () => void;
}

function Button({ children, buttonFunction }: ButtonProps) {
  return <Container onClick={buttonFunction}>{children}</Container>;
}

export default Button;
