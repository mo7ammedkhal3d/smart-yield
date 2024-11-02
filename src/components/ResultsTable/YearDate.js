import React from "react";

const YearDate = props =>{    
    return (
        <tr>   
            <td>{props.YearDate['year']}</td>
            <td>{props.YearDate['yearlyInterest']}</td>
            <td>{props.YearDate['savingsEndOfYear']}</td>
            <td>{props.YearDate['yearlyContribution']}</td>
        </tr>
    );
}

export default YearDate;