import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const Header = (props) => (
  <Link href="/">
    <div className="Header">
       <div className="logoContainer"><img src="./logo-shadow-small.png" width="50" height="50" /></div>{" "}
      &nbsp;{props.appTitle}
    </div>
  </Link>
);

export default Header;
