import Navigation from "./Navigation.jsx";
import { useState, useEffect } from "react";
import Loading from "../Components/loading.jsx";
import "../Styles/BookTicket.css";
import Payment from "../Components/Payment.jsx";
import Notification from "../Components/Notification.jsx";
import TimeDiff from "../HelperFiles/TimeDiff.js";
// //
////
///
export default function BookTicket() {
  const [formdata, setFormData] = useState({
    price: null,
  });

  const [isTicketpage, setTicketpage] = useState(false);
  let [isFirstform, setisFirstForm] = useState(true);
  const [notify, setnotify] = useState(null);
  let [seletedOption, setSeletedOption] = useState("Select Catagory");
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1); // Add 1 day

  const setValue = (event) => {
    setFormData((formdata) => {
      formdata[event.target.name] = event.target.value;
      formdata.price = null;
      return { ...formdata };
    });
  };
  let handleOption = (event) => {
    setSeletedOption(event.target.value);
  };
  const submitForm = (event) => {
    // setisFirstForm(false);
    event.preventDefault();
    let endTime = () => {
      let inputTime = formdata.endTime.split(":");
      let etime = `${inputTime[0] - 1}:${inputTime[1]}`;
      return etime;
    };
    if (formdata.startTime > endTime()) {
      // alert();
      setnotify(
        <Notification
          type="error"
          message="kindly select a time slot atleast for 1 hour!"
        />
      );
      setTimeout(() => {
        setnotify(null);
      }, 3000);
    } else if (formdata.catagorie == null) {
      setnotify(
        <Notification type="error" message="kindly select Catagory!" />
      );
      setTimeout(() => {
        setnotify(null);
      }, 3000);
    } else {
      let generatedPrice = () => {
        let price;
        if (formdata.catagorie == "Adult") {
          price =
            TimeDiff(formdata.startTime, formdata.endTime) *
            100 *
            formdata.numberofmember;
        } else if (formdata.catagorie == "Child") {
          price =
            TimeDiff(formdata.startTime, formdata.endTime) *
            50 *
            formdata.numberofmember;
        } else {
          price =
            TimeDiff(formdata.startTime, formdata.endTime) *
            75 *
            formdata.numberofmember;
        }
        return price;
      };
      setFormData((formdata) => {
        formdata.price = generatedPrice();
        return { ...formdata };
      });
      // console.log(formdata);

      setisFirstForm(false);
    }
  };
  return (
    <>
      <Navigation bookticket={true} />
      {notify}
      {isFirstform ? (
        <div className="box-bkt">
          <form onSubmit={submitForm}>
            <div className="inputBox">
              <input
                type="text"
                name="fullName"
                required
                onChange={setValue}
                value={formdata.fullName || ""}
              />
              <label>Full Name</label>
            </div>
            <div className="inputBox">
              <input
                type="date"
                name="date"
                required
                onChange={setValue}
                value={formdata.date || ""}
                min={tomorrow.toISOString().split("T")[0]}
              />
            </div>
            <div className="bktTime">
              <label className="bktTime-Time-lable">Time Slot</label>
              <div className="inputBox">
                <input
                  type="time"
                  name="startTime"
                  required
                  onChange={setValue}
                  value={formdata.startTime || ""}
                />
                <label>From</label>
              </div>
              <div className="inputBox">
                <input
                  type="time"
                  name="endTime"
                  required
                  onChange={setValue}
                  value={formdata.endTime || ""}
                />
                <label>Till</label>
              </div>
            </div>
            <div className="inputBox">
              {/* <label for="catagorie">select a catagorie:</label> */}

              <select
                id="catagorie"
                value={formdata.catagorie || ""}
                onChange={setValue}
                name="catagorie"
                required
              >
                <option value="Select Category">Select Category</option>
                <option value="Adult">Adult</option>
                <option value="Child">Child</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
            <div className="inputBox">
              <input
                type="number"
                name="numberofmember"
                required
                onChange={setValue}
                value={formdata.numberofmember || ""}
              />
              <label>
                {formdata.catagorie
                  ? "Number of " + formdata.catagorie
                  : "Number of Member"}
              </label>
            </div>
            {formdata.price && <p>Price : {formdata.price}</p>}
            <input type="submit" name="confirm" value="Continue" />
          </form>
        </div>
      ) : (
        <div
          className="box-bkt"
          style={{
            width: "35vw",
          }}
        >
          <div className="cont-payment">
            <div className="innerCont-payment">
              <Payment amount={formdata.price} formdata={formdata} />
              <p>Pay with any UPI App</p>
            </div>
            <div className="pay-details">
              <span>Name : {formdata.fullName}</span>
              <span>Date : {formdata.date}</span>
              <span>
                Time Slote : {formdata.startTime + " to " + formdata.endTime}
              </span>

              <span>Catagory : {formdata.catagorie}</span>
              <span>
                Number of {formdata.catagorie}: {formdata.numberofmember}{" "}
              </span>
              <span>Price: {formdata.price}</span>
            </div>
          </div>
          <button
            className="btn-bkt-backbtn"
            onClick={() => setisFirstForm(true)}
          >
            Back
          </button>
        </div>
      )}
    </>
  );
}
