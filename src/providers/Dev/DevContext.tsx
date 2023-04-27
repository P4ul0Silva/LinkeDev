import { AxiosResponse } from "axios";
import { useState, ReactNode, createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import {  IJob, IUser, UserContext } from "../User/UserContext";

export const DevContext = createContext({} as DevProviderData);

interface DevProps {
  children: ReactNode;
}

interface DevProviderData {
  dev: IUser | null;
  getDev: (id: string) => void;
  modalDevProfile: boolean;
  setModalDevProfile: React.Dispatch<React.SetStateAction<boolean>>;
  getModalDevProfile: (id: string) => void;
  getDevSubsList: () => Promise<void>;
  devSub: IJob[];
  editModalDev: IEditDev | null;
  setEditModalDev: (editModalDev: IEditDev | null) => void;
  editProfileDev: (data: IEditDev) => void;
}

export interface IEditDev {
  name?: string;
  email?: string;
  password?: string;
  level?: string;
  title?: string;
  stacks?: string[];
  bio?: string;
  social?: string;
  avatar_URL?: string;
}

function DevProvider({ children }: DevProps) {
  const [dev, setDev] = useState<IUser | null>(null);
  const [modalDevProfile, setModalDevProfile] = useState<boolean>(false);
  const { user, setUser } = useContext(UserContext);
  const [devSub, setDevSub] = useState([]);
  const [editModalDev, setEditModalDev] = useState<IEditDev | null>(null);

  async function getDev(id: string) {
    await api.get(`/users/${id}`).then((res) => {
      setDev(res.data);
    });
  }

  async function getModalDevProfile(id: string) {
    await getDev(id);
    setModalDevProfile(true);
  }

  const getDevSubsList = async () => {
    await api.get("/jobs").then((res: AxiosResponse) => {
      const devNewSubs = res.data.filter((job: IJob) => {
        const jobCandidate = job.candidates?.find((candidate: IUser) => {
          if (candidate.id === user?.id) {
            return true;
          }return false
        });
        if (jobCandidate) {
          return true;
        }return false
      });
      setDevSub(devNewSubs);
    });
  };

  const editProfileDev = (data: IEditDev) => {
    !data.name && delete data.name;
    !data.email && delete data.email;
    !data.title && delete data.title;
    !data.stacks && delete data.stacks;
    !data.avatar_URL && delete data.avatar_URL;
    !data.bio && delete data.bio;

    api
      .patch(`/users/${user?.id}`, data)
      .then((response) => {
        setUser(response.data);
        setEditModalDev(null);
        toast.success("perfil atualizado com sucesso!");
      })
      .catch((err) => {
        toast.error("Erro ao atualizar perfil!");
      });
  };

  return (
    <DevContext.Provider
      value={{
        dev,
        getDev,
        getModalDevProfile,
        modalDevProfile,
        setModalDevProfile,
        getDevSubsList,
        devSub,
        editModalDev,
        setEditModalDev,
        editProfileDev
      }}
    >
      {children}
    </DevContext.Provider>
  );
}

export default DevProvider;
