import React,{useState} from "react";
import YearDate from "./YearDate";
import styles from './ResultsTable.module.css';

const ResultsTable = props =>{
  console.log(props.yearDate);
  
  let [yearsDate,setYearsDate] = useState(props.yearlyData);

    return(
        <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
          {yearsDate.map((yearDate => (
            <YearDate YearDate={YearDate}/>
          )))}
        </tbody>
      </table>
    );
}

export default ResultsTable;