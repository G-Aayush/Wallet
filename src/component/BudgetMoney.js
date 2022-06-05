import React from "react";
import "../styles/BudgetMoney.css";
import { AiTwotoneRightCircle } from "react-icons/ai";

const BudgetMoney = () => {
  return (
    <div className ="Budget">
      <div className="BudgetAmount">
        <div>
          <form>
            <label>Amount:</label>&nbsp;&nbsp;
            <input type="number" placeholder="Enter Amount" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </form>
        </div>
        <div>
          <form>
            <label>Period:</label>&nbsp;
            <input type="date" placeholder="Enter From" />&nbsp;&nbsp;
            <label>To:</label>&nbsp;
            <input type="date" placeholder="Enter To" />
          </form>
        </div>
      </div>
      <div className="BudgetType">
        <div className="BudgetCategory">Category:</div>
        <form>
          <label>
            <AiTwotoneRightCircle />
            Food:
          </label>
          &nbsp;&nbsp;
          <input type="number"></input>
          <br></br>
          <label>
            <AiTwotoneRightCircle />
            Dairy:
          </label>
          &nbsp;&nbsp;
          <input type="number"></input>
          <br></br>
          <label>
            <AiTwotoneRightCircle />
            Shopping:
          </label>
          &nbsp;&nbsp;
          <input type="number"></input>
          <br></br>
          <label>
            <AiTwotoneRightCircle />
            Fun:
          </label>
          &nbsp;&nbsp;
          <input type="number"></input>
          <br></br>
          <label>
            <AiTwotoneRightCircle />
            Miscellaneous:
          </label>
          &nbsp;&nbsp;
          <input type="number"></input>
          <br></br>
        </form>
      </div>
      <div className="Submitbt">
        <div className="Submitbta">Proceed</div>
      </div>
    </div>
  );
};
export default BudgetMoney;
