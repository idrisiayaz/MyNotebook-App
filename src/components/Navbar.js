import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";
import "../App.css";

export const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { user } = context;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            My Notebook
          </a>
          <img
            className="my-1 mx-1"
            src="/notes.png"
            alt="Logo"
            height="40"
            width="40"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {localStorage.getItem("token") && (
                  <Link
                    className={`nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/"
                  >
                    Create Note
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              {localStorage.getItem("token") ? (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li>
                    <div class="dropdown mx-2">
                      <button
                        class="btn btn-dark dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Welcome, {user.name}
                        <i class="fa-regular fa-user mx-2"></i>
                      </button>

                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" style={{color: "grey"}}>
                            {user.email} &nbsp; &nbsp; &nbsp;
                          </a>
                        </li>
                        <li>
                            <Link
                            class="dropdown-item"
                              to="/"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              View Notes
                            </Link>
                        </li>
                        <li>
                            <Link
                            class="dropdown-item"
                              to="/PrivacyPolicy"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              Privacy policy
                            </Link>
                        </li>
                        <li>
                            <Link
                            class="dropdown-item"
                              to="/TermsOfService"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              Terms of Service
                            </Link>
                        </li>
                        <li>
                          <button
                            className="logout dropdown-item btn btn-primary border-danger"
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              ) : (
                <div>
                  <Link
                    className="btn btn-primary mx-1"
                    to="/login"
                    role="button"
                  >
                    Login
                  </Link>
                  <Link
                    className="btn btn-primary mx-1"
                    to="/signup"
                    role="button"
                  >
                    Signup
                  </Link>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
