import React from "react";
import NavBar from "./navbar";
import "../styling/layout.css";

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <div className="navbar-container">
                <NavBar />
            </div>
            <div className="content-container">
                {children}
            </div>
        </div>
    );
};

export default Layout;