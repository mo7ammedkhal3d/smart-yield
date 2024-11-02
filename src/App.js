import React from 'react';
import Header from './components/Header/Header'
import UserInput from './components/UserInput/UserInput';
import ResultsTable from './components/ResultsTable/ResultsTable';

function App() {

  const calculateHandler = (userInput) => {
    let yearlyData = []; 

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  };

  return (
    <div>
      <Header/>
      <UserInput onCalcualte={calculateHandler}/>
      <ResultsTable />
    </div>
  );
}

export default App;
