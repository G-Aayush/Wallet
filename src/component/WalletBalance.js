import React from "react";
import "../styles/WalletBalance.css";

const Walletbalance = () => {
  return (
    <div className="rectangle">
      <div className="rectangle-data">
        <div className="rectangle-items">
          <div><h1>SCB Wallet Balance</h1></div>
          <div>
              <h2>INR 5000.00</h2>
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walletbalance;
