import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass
} from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

const Header = props => (
  <Link href="/">
    <div className="Header"><FontAwesomeIcon  icon={faCompass} /> &nbsp;{props.appTitle}</div>
  </Link>
);

export default Header;