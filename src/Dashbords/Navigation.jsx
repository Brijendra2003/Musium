import { Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/Navigation.css";
import axiosInstance from "../HelperFiles/axiosInstance";
import Loading from "../Components/loading";
export default function Navigation({
  home,
  exhibits,
  bookticket,
  aboutus,
  contactus,
}) {
  let [loading, setLoading] = useState(null);

  let logout = () => {
    setLoading(<Loading />);
    axiosInstance
      .post("/logout", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setLoading(null);
        alert(res.data.message);
        localStorage.clear();
        location.reload();
      })
      .catch((err) => {
        setLoading(null);
        // console.log(err);
        alert(err.message);
        if (err.message == "Network Error") {
          alert("Server isn't responding. Please retry after some time!");
        } else if (err.message == "Request failed with status code 403") {
          alert("You were logged out! Kindly re-login.");
          localStorage.clear();
          location.reload();
        }
      });
  };
  return (
    <>
      {loading}
      <div className="top-navgation">
        <div className="menu">CSMVS</div>
        <ul className="links">
          <Link className={home ? "link-visited link" : "link"} to="/">
            Home
          </Link>
          <Link
            className={exhibits ? "link-visited link" : "link"}
            to="/Exhibits"
          >
            Exhibits
          </Link>
          <Link
            className={bookticket ? "link-visited link" : "link"}
            to="/BookTickets"
          >
            BookTickets
          </Link>
          {/* <Link
            className={aboutus ? "link-visited link" : "link"}
            to="/AboutUS"
          >
            About-Us
          </Link> */}
          <Link
            className={contactus ? "link-visited link" : "link"}
            to="/ContactUS"
          >
            Contact-Us
          </Link>
          {localStorage.getItem("username") ? (
            <button className="btn-logout" onClick={logout}>
              Logout
            </button>
          ) : (
            <Link className="link link-login" to="/Login">
              Login
            </Link>
          )}
        </ul>
      </div>
    </>
  );
}
