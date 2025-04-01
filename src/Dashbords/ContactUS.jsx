import Navigation from "./Navigation";
import "../Styles/ContactUS.css";
import Notification from "../Components/Notification";
import axiosInstance from "../HelperFiles/axiosInstance";

// import "../Styles/signin.css";
import { useState } from "react";
import Loading from "../Components/loading";

export default function ContactUs() {
  const [formdata, setFormData] = useState({});
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [notify, setNotify] = useState(null);
  let [loading, setLoading] = useState(null);

  const setValue = (event) => {
    setFormData((formdata) => {
      formdata[event.target.name] = event.target.value;
      return { ...formdata };
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(<Loading />);
    sendDta();
  };

  function sendDta() {
    emailjs
      .send("service_xaue66p", "template_ai577tf", formdata)
      .then((response) => {
        setLoading(null);
        alert(
          "Your email has been successfully sent to Brijendra Tiwari. He will respond to you shortly.",
          response
        );
      })
      .catch((erorr) => {
        setLoading(null);
        alert("Message not send to the host due to ", erorr);
      });
  }
  return (
    <>
      <Navigation contactus={true} />
      {notify}
      {loading}
      <div className="box-contactUs">
        <h2>Contact Us!</h2>
        <p>Register your shelf by generating your Username and password!</p>
        <form onSubmit={submitForm}>
          <div className="inputBox">
            <input
              type="text"
              name="FullName"
              required
              onChange={setValue}
              value={formdata.FullName || ""}
            />
            <label>Full Name</label>
          </div>
          <div className="inputBox">
            <input
              type="number"
              name="contactno"
              required
              onChange={setValue}
              value={formdata.contactno || ""}
            />
            <label>Contact no</label>
          </div>
          <div className="inputBox">
            <input
              type="email"
              name="email"
              required
              onChange={setValue}
              value={formdata.email || ""}
            />
            <label>Email</label>
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="query"
              required
              onChange={setValue}
              value={formdata.query || ""}
            />
            <label>Query/Suggestion</label>
          </div>
          <input type="submit" name="sign-in" value="Submit" />
        </form>
      </div>
    </>
  );
}
