import { Link } from "react-router-dom";
import { SearchBar } from "../index";
import mainLogo from "../../assets/mainLogo.png";
import { Nav, Logo } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo src={mainLogo} alt="logo" />
      </Link>
      <SearchBar />
    </Nav>
  );
};

export default Navbar;
