import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1> Blog Space</h1>
      <div className="links">
        <a href="/">Home</a>
        {/* camel case */}
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
