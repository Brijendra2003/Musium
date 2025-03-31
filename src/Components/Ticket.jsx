import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocation } from "react-router-dom";
import "../Styles/Ticket.css";

function Ticket() {
  const ticketRef = useRef(null);
  const location = useLocation();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (location.state) {
      setFormData(location.state);
    }
  }, [location.state]);

  const downloadPDF = () => {
    setTimeout(() => {
      handlePrint();
    }, 500);
  };

  alert("Kindly Take a screenshot of it for gate entry");

  const handlePrint = useReactToPrint({
    content: () => ticketRef.current,
    documentTitle: `CSMVS-Ticket-${formData?.fullName || "Guest"}`,
  });

  if (!formData) {
    return <p>Error: No ticket data available.</p>;
  }

  return (
    <div className="ticket-container">
      <div className="ticket-inner-container" ref={ticketRef}>
        <h3>Welcome to CHHATRAPATI SHIVAJI MAHARAJ VASTU SANGRAHALAYA</h3>
        <p>
          <strong>Visitor:</strong> {formData.fullName}
        </p>
        <p>
          <strong>Date:</strong> {formData.date}
        </p>
        <p>
          <strong>Time Slote:</strong>{" "}
          {formData.startTime + " to " + formData.endTime}
        </p>
        <p>
          <strong>Catagory:</strong> {formData.catagorie}
        </p>
        <p>
          <strong>Number of {formData.catagorie}:</strong>{" "}
          {formData.numberofmember}
        </p>
        <p>
          <strong>Amount:</strong> {formData.price}
        </p>
        <p>
          <strong>Payment Method:</strong> UPI!
        </p>
        <span style={{ color: "aqua" }}>Thank you for visiting!</span>
      </div>
      <button onClick={downloadPDF}>Download Ticket PDF</button>
    </div>
  );
}

export default Ticket;
