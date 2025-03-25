import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function Payment({ amount }) {
  const upiId = "mishrasani2006@oksbi"; // Replace with your actual UPI ID
  const payeeName = "Sani Mishra";

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
    <div className="qr-code" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>UPI QR Code Payment</h2>
      <br />
      <br />
      {amount && parseFloat(amount) > 0 && (
        <QRCodeCanvas value={generateUPILink()} size={200} />
      )}
      {/* <h3> Pay {amount}rs</h3> */}
    </div>
  );
}

export default Payment;
