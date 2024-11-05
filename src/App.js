import React,{useState} from 'react';
import Header from './components/Header/Header'
import UserInput from './components/UserInput/UserInput';
// import UserInput2 from './components/UserInput/UserInput2';
import ResultsTable from './components/ResultsTable/ResultsTable';

//#region Note for UserInput2
  // UserInput2 is Another Solution that aunsure that the failds is not empty string 
//#endregion


function App() {

  const [userInput,setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  }

    let yearlyData = []; 


    if(userInput){
      let currentSavings = +userInput['current-savings']; 
      const yearlyContribution = +userInput['yearly-contribution']; 
      const expectedReturn = +userInput['expected-return'] / 100;
      const duration = +userInput['duration'];
  
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          id:Math.random().toString(),
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
    }

    const onClearDataHandler = ()=>{
      setUserInput(null);
    }

  return (
    <div>
      <Header/>
      <UserInput onCalcualte={calculateHandler} onClearData={onClearDataHandler}/>
      {/* <UserInput2 onCalcualte={calculateHandler} onClearData={onClearDataHandler}/> */}
      {!userInput && <p className='no-investment'>No investment calcualted yet</p>}
      {userInput && <ResultsTable data={yearlyData} initialInvestment={userInput['current-savings']}/>} 
    </div>
  );
}

export default App;