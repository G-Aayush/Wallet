import React from "react";
import "../styles/NavTable.css";


const NavTable = () => {
  return (
      <div className = "NavTableBack">
          <div>
              <table className = "Tabledev">
                  <tr>
                      <td className = "TableData">Add Money</td>
                      <td className = "TableData">Budget Money</td>
                  </tr>
                  <tr>
                      <td className = "TableData">Transfer Money</td>
                      <td className = "TableData">Transfer To Bank Account</td>
                  </tr>
                  <tr>
                      <td className = "TableData">Transaction History</td>
                      <td className = "TableData"></td>
                  </tr>
              </table>
          </div>
      </div>

  );
};
export default NavTable;