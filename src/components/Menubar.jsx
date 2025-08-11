import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Menubar = () => {
  return (
    <div
      className="navbar navbar-expand-lg shadow-sm sticky-top"
      style={{ backgroundColor: '#0d47a1' }}
    >
      <div className="container py-2">
        <Link className="navbar-brand d-flex align-items-center text-white" to="/">
          <span className="fw-bolder fs-4 mx-3 text-white">QuicInvoice</span>
          <Logo />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/generate">Generate</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/preview">Preview</Link>
            </li>
            <li className="nav-item ms-3">
              <button className="btn btn-outline-light btn-sm">
                Login / Signup
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
