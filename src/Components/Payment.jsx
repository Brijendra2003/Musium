import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import Ticket from "./ticket";
import TicketGenerator from "./ticket";

function Payment({ amount, formdata }) {
  const [isTicketPage, setIsTicketPage] = useState(false);
  const navigate = useNavigate();
  const upiId = "kinjalmishra70@oksbi"; // Replace with your actual UPI ID
  const payeeName = "KINJAL UDAYKANT MISHRA";
  amount = Math.floor(amount);
  const generateUPILink = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return "";
    }
    return `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
      payeeName
    )}&am=${amount}&cu=INR`;
  };

  return (
    <div>
      <div className="qr-code" style={{ textAlign: "center", padding: "20px" }}>
        <h2>UPI QR Code Payment</h2>
        {amount && parseFloat(amount) > 0 ? (
          <>
            <QRCodeCanvas value={generateUPILink()} size={200} />
            <br />
            <button
              className="btn-bkt-submitbtn"
              style={{ marginTop: "8vh" }}
              onClick={() => navigate("/Ticket", { state: formdata })} // Ensuring state updates properly
            >
              Continue
            </button>
          </>
        ) : (
          <p style={{ color: "red" }}>
            It seams like you selected a invalid Values please re submit the
            form
          </p>
        )}
      </div>
    </div>
  );
}

export default Payment;
