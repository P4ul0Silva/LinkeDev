import { ReactNode } from "react";
import GlobalProvider from "./Global/GlobalContext";
import UserProvider from "./User/UserContext";
import DevProvider from "./Dev/DevContext";
import JobsProvider from "./Jobs/JobsContext";
interface ProviderProps {
  children: ReactNode;
}

export function Providers({ children }: ProviderProps) {
  return (
    <GlobalProvider>
      <UserProvider>
        <DevProvider>
          <JobsProvider>{children}</JobsProvider>
        </DevProvider>
      </UserProvider>
    </GlobalProvider>
  );
}
