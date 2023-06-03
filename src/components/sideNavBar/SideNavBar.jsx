import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MenuItem } from "../../DataBase/Db";
import { NavLink } from "react-router-dom";
import "../../styles/SideNavBar.css";
const SideNavBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="container">
        <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
          <div className="topSection">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Logo
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {MenuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};

export default SideNavBar;
