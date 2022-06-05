import React from "react";
import "../styles/History.css";
import {BiRupee} from 'react-icons/bi';
import {BiSearchAlt} from 'react-icons/bi';

const History = () => {
    return (
        <div>
            {/*<div className="HistoryHeading">
                <div className="HistoryHeader">
                    History
                </div>
                <div className = "HistorySearch">
                </div>
                <div className = "HistorySearchIcon">
                    <BiSearchAlt/>
                </div>
    </div>*/}
            <div >
                <table className = "HistoryTable">
                    <tr className = "HistoryTableRow">
                        <td className = "HTDataDesc">Ram Prakash</td>
                        <td className = "HTDataAmount"><BiRupee/> 20</td>
                    </tr>
                    <tr className = "HistoryTableRow">
                        <td className = "HTDataDesc">Vansh Bishnoi</td>
                        <td className = "HTDataAmount"><BiRupee/> 72</td>
                    </tr>
                    <tr className = "HistoryTableRow">
                        <td className = "HTDataDesc">Abhinav Jain</td>
                        <td className = "HTDataAmount"><BiRupee/> 576</td>
                    </tr>
                    <tr className = "HistoryTableRow">
                        <td className = "HTDataDesc">Vinyas Kothiala</td>
                        <td className = "HTDataAmount"><BiRupee/> 72</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default History;