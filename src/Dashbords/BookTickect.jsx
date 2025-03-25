import Navigation from "./Navigation.jsx";
import { useState, useEffect } from "react";
import Loading from "../Components/loading.jsx";
import "../Styles/signin.css";
import Payment from "../Components/Payment.jsx";
export default function BookTicket() {
  const [formdata, setFormData] = useState({});
  let [isFirstform, setisFirstForm] = useState(true);
  let [seletedOption, setSeletedOption] = useState("Select Catagory");

  const setValue = (event) => {
    setFormData((formdata) => {
      formdata[event.target.name] = event.target.value;
      return { ...formdata };
    });
  };
  let handleOption = (event) => {
    setSeletedOption(event.target.value);
  };
  let submitForm = () => {
    setisFirstForm(false);
  };
  return (
    <>
      <Navigation bookticket={true} />
      {isFirstform ? (
        <div className="box">
          <form onSubmit={submitForm}>
            <div className="inputBox">
              <input
                type="date"
                name="date"
                required
                onChange={setValue}
                value={formdata.date || ""}
              />
              <label></label>
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
                value={seletedOption}
                onChange={handleOption}
              >
                <option value="Select Categorie">Select Categorie</option>
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
              <label>Number of Member</label>
            </div>

            <input type="submit" name="confirm" value="Continue" />
          </form>
        </div>
      ) : (
        <div className="box">
          <Payment amount={5} />
        </div>
      )}
    </>
  );
}
