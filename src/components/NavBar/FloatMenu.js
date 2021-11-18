import { CgMenuGridR } from "react-icons/cg";
const FloatMenu = ({ setOpenMenu, openMenu }) => {
  return (
    <div
      className="deploy-menu-icon"
      onClick={() => setOpenMenu(openMenu ? false : true)}
    >
      <CgMenuGridR size="2.5rem" color="#b99768" />
    </div>
  );
};

export default FloatMenu;
