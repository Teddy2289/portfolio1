import React from "react";
import "./sidebar.css";

function SideBar() {
  return (
    <aside className="aside">
    
      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="icon-home"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#education" className="nav_link">
                <i className="icon-briefcase"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#service" className="nav_link">
                <i className="icon-globe"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#skils" className="nav_link">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#expe" className="nav_link">
                <i className="icon-cursor"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" className="nav_link">
                <i className="icon-layers"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav_footer">
        <span className="copyright">&copy; 2023-2024</span>
      </div>
    </aside>
  );
}

export default SideBar;
