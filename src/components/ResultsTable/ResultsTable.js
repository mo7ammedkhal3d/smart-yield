import React,{useState} from "react";
import YearDate from "./YearDate";
import styles from './ResultsTable.module.css';

const ResultsTable = props =>{
  
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
          {props.data.map(yearData =>(
            <tr key={yearData.id}>
              <td>{yearData.year}</td>
              <td>{yearData.savingsEndOfYear}</td>
              <td>{yearData.yearlyInterest}</td>
              <td>{yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year}</td>
              <td>{props.initialInvestment + yearData.yearlyContribution * yearData.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default ResultsTable;