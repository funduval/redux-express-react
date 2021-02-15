import React from "react";

const NavBar = (props) => {
    return (
        <nav style={{ color: "#fff" }} className="navbar navbar-dark bg-dark">
            <span>
                <span className="badge badge-pill badge-info m-2">
                    Add Chat
                </span>
                <div style={{ fontWeight: "bold", display: "inline", width: "10em !important", textAlign: "center" }}>An Awesome Chat App</div>

            </span>
        </nav >
    );
};

export default NavBar;