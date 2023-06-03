import React from "react";
import { FaBars } from "react-icons/fa";
import { MenuItem } from "../../DataBase/Db";
import { NavLink } from "react-router-dom";
import "../../styles/SideNavBar.css";
const SideNavBar = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="topSection">
            <h1 className="logo">Logo</h1>
            <div className="bars">
              <FaBars />
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
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};

export default SideNavBar;
