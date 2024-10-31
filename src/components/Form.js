import React,{useState} from "react";
import styles from './Form.module.css';

const Form = props =>{

    const [currentSavings,setcurrentSavings] = useState('');
    const [yearlySavings,setYearlySavings] = useState('');
    const [expectedInterest,setExpectedInterest] = useState('');
    const [investmentDuration,setInvestmentDuration] = useState('');

    const submitFormHandler = event =>{
        event.preventDefault();

        let userInput = {
            'current-savings':currentSavings,
            'yearly-contribution':yearlySavings,
            'expected-return':expectedInterest,
            'duration':investmentDuration
        }  

        props.onSaveChanges(userInput);

        resstFailds();
    }

    const inputHandler = (input,key)=>{
        if(key === 'current-savings'){
            setcurrentSavings(input);
        } else if(key === 'yearly-contribution'){
            setYearlySavings(input);
        } else if(key === 'expected-return'){
            setExpectedInterest(input);
        } else {setInvestmentDuration(input);}
    }

    const resstFailds = ()=>{
        setcurrentSavings('');
        setYearlySavings('');
        setExpectedInterest('');
        setInvestmentDuration('');
    }

    return(
        <form onSubmit={submitFormHandler} className={styles.form}>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input value={currentSavings} type="number" id="current-savings" onChange={event =>{inputHandler(event.target.value,event.target.id)}}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input value={yearlySavings} type="number" id="yearly-contribution" onChange={event =>{inputHandler(event.target.value,event.target.id)}}/>
          </p>
        </div>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input value={expectedInterest} type="number" id="expected-return" onChange={event =>{inputHandler(event.target.value,event.target.id)}}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input value={investmentDuration} type="number" id="duration" onChange={event =>{inputHandler(event.target.value,event.target.id)}}/>
          </p>
        </div>
        <p className={styles.actions}>
          <button type="reset" className={styles.buttonAlt} onClick={resstFailds}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    );
}

export default Form;