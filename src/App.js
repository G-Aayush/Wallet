import React from "react";
import Navbar from "./component/Navbar";
import Walletbalance from "./component/WalletBalance";
import "./styles/App.css";
import NavTable from "./component/NavTable";
import AddMoney from "./component/AddMoney";
import BudgetMoney from "./component/BudgetMoney";
import TransferMoney from "./component/TransferMoney";
import History from "./component/History";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Walletbalance />
      </div>
      <div>
        <NavTable />
      </div>
      <div className="AddMoneyHeading">
        <p>ADD MONEY</p>
      </div>
      <div>
        <AddMoney />
      </div>
      <div className="AddMoneyHeading">
        <p>BUDGET MONEY</p>
      </div>
      <div>
        <BudgetMoney />
      </div>
      <div className="AddMoneyHeading">
        <p>TRANSFER MONEY</p>
      </div>
      <div>
        <TransferMoney/>
      </div>
      <div className="AddMoneyHeading">
        <p>HISTORY</p>
      </div>
      <div>
        <History/>
      </div>
    </div>
  );
}

export default App;
