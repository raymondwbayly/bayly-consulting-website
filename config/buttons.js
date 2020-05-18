
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faMapMarkerAlt,
  faUser,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Projects",
    path: "/projects",
    icon: <FontAwesomeIcon icon={faAngleDoubleLeft} />
  },
  {
    label: "Articles",
    path: "/articles",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
  },
  {
    label: "Companies",
    path: "/companies",
    icon: <FontAwesomeIcon icon={faAddressBook} />
  },
  {
    label: "Expertise",
    path: "/expertise",
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;