import React,{useState} from "react";
import styles from './UserInput.module.css';

const initalUserInput = {
  'current-savings':10000,
  'yearly-contribution':1200,
  'expected-return':7,
  'duration':10
};

const UserInput = props =>{
    const [userInput,setUserInput] = useState(initalUserInput);

    const submitHandler = event =>{
        event.preventDefault();
        
        props.onCalcualte(userInput);

        resstFailds();
    }

    const changeHandler = (key,value)=>{
      setUserInput((pervInput)=>{
        return {
          ...pervInput,
          [key]:value
        };
      });
    };

    const resstHandler = ()=>{
      setUserInput(initalUserInput);

      // props.onReset();
    }

    return(
        <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input value={userInput['current-savings']} type="number" id="current-savings" onChange={event =>{changeHandler(event.target.id,event.target.value)}}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input value={userInput['yearly-contribution']} type="number" id="yearly-contribution" onChange={event =>{changeHandler(event.target.id,event.target.value)}}/>
          </p>
        </div>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input value={userInput['expected-return']} type="number" id="expected-return" onChange={event =>{changeHandler(event.target.id,event.target.value)}}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input value={userInput['duration']} type="number" id="duration" onChange={event =>{changeHandler(event.target.id,event.target.value)}}/>
          </p>
        </div>
        <p className={styles.actions}>
          <button type="reset" className={styles.buttonAlt} onClick={resstHandler}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    );
}

export default UserInput;