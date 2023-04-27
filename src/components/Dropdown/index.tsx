import { useContext, useState, useEffect } from "react";
import { Container } from "./style";
import { MdMenu, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import { UserContext } from "../../providers/User/UserContext";
import { DevContext } from "../../providers/Dev/DevContext";

function Dropdown() {
  const [open, setOpen] = useState<boolean>(false);
  const { logout } = useContext(GlobalContext);
  const { user, setModalEditRecruiter } = useContext(UserContext);
  const { setEditModalDev } =useContext(DevContext)

  useEffect(() => {
    open &&
      setTimeout(() => {
        setOpen(false);
      }, 10000);
  }, [open]);

  return (
    <Container>
      <div onClick={() => setOpen(!open)}>
        {open ? <MdOutlineKeyboardArrowDown size={35} /> : <MdMenu size={45} />}
      </div>

      {open && (
        <div className="dropdown">
          <button onClick={() => {
            setEditModalDev(user)
            setModalEditRecruiter(user)
            }
          }>
            <BiEditAlt /> Editar Perfil
          </button>
          <button onClick={logout}>
            <MdOutlineLogout /> Logout
          </button>
        </div>
      )}
    </Container>
  );
}

export default Dropdown;
