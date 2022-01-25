import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Apna Cart
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
