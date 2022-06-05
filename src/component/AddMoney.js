import React from "react";
import "../styles/AddMoney.css";
import { FaRupeeSign } from 'react-icons/fa';
import { BsFillRecordCircleFill } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs';

const AddMoney = () => {
  return (
      <>
      
            <div className = "AddMoneyTable">
                <div className = "AddMoneyBack">
                    <table className = "AmountAddTable">
                        <tr>
                            <td className = "TableDataa"><h1>Add Money To Wallet</h1></td>
                        </tr>
                        <tr>
                            <td className = "TableDatab">
                                <form>
                                    <FaRupeeSign /><input type ="number"></input>
                                </form>
                                {/*I have to make a button as well */}
                            </td>
                        </tr>
                    </table>
                </div>
                <div className = "PeriodData" >
                    <p>
                        Do you want to add money for a particular period
                    </p>
                    <p>
                        <BsFillRecordCircleFill /> Yes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsCircle />No
                    </p>
                    <div class = "PeriodStyle">
                        <form>
                            <label>Period:</label>&nbsp;
                            <input type = "date"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label>to:</label>&nbsp;
                            <input type = "date"></input>
                        </form>
                        {/*I have to make a button as well */}
                    </div>
                </div>
            </div>
            <div className = "Submitbtn">
               <div className = "Submitbtna">
                   Add Money
                </div>    
            </div>
            </>
      
  );
};
export default AddMoney;