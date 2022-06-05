import React from "react";
import "../styles/TransferMoney.css";

const TransferMoney = () => {
  return (
    <div className ="TransferMoneyTable">
        <div className = "TransferMoneyAcc">
            <div className="TransferMoneyHeading">TRANSFER MONEY</div>
            <div className = "TMF">
                <form>
                <label className="TransferMoneyLabel">Contact No:</label>&nbsp;&nbsp;
                <input type="number"></input>
                <br/>
                <label className="TransferMoneyLabel">Amount:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number"></input>
                <br/>
                </form>
                <div className = "SubmitBtnTM">
                    <div className = "SubmitBtnTMa">
                        Pay
                    </div>
                </div>
            </div>
        </div>
        <div className = "TransferAccountTable">
            <div className="TransferMoneyHeading">TRANSFER MONEY TO ACCOUNT</div>
            <div>
                <form>
                <label className="TransferMoneyLabel">Amount:</label>&nbsp;&nbsp;
                <input type="number"></input>
                <br></br>
                </form>
                <div className = "SubmitBtnTA">
                    <div className = "SubmitBtnTAa">
                        Transfer To Account
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default TransferMoney;
