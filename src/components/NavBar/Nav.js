import { Link } from "react-router-dom";
const Nav = ({ menuList, openMenu, setOpenMenu }) => {
  return (
    <nav className={`nav ${openMenu && "isActive-menu"}`}>
      <ul className="menu">
        {menuList.map((item, index) => (
          <li
            className="menu__item"
            key={index}
            onClick={() => setOpenMenu(false)}
          >
            <Link to={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
