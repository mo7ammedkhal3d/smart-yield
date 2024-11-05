import React,{useState} from "react";
import styles from './UserInput.module.css';

const initalUserInput = {
  'current-savings':10000,
  'yearly-contribution':1200,
  'expected-return':7,
  'duration':10
};

const fallback = {
  'current-savings':true,
  'yearly-contribution':true,
  'expected-return':true,
  'duration':true
}

const UserInput = props =>{
    const [isValid,setIsValid] = useState(fallback);
    const [userInput,setUserInput] = useState(initalUserInput);

    const submitHandler = event =>{
        event.preventDefault();

        props.onCalcualte(userInput);

        resstHandler();
    }

    const changeHandler = (key,value)=>{
      if(value === ''){        
        setIsValid((prevFallback)=>{
          return{
            ...prevFallback,
            [key]:false
          }
        });
      } else if(value !== ''){
        setIsValid((prevFallback)=>{
          return{
            ...prevFallback,
            [key]:true
          }
        });
      }

      setUserInput((pervInput)=>{
        return {
          ...pervInput,
          [key]:value
        };
      });
    };

    const resstHandler = ()=>{
      setUserInput(initalUserInput);
    }

    const clickClearHandler = ()=>{
      props.onClearData();                                                            
    }

    return(
        <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input className={!isValid['current-savings'] ? styles.fallback:''} value={userInput['current-savings']} type="number" id="current-savings" onChange={event =>{changeHandler(event.target.id,event.target.value)}}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input className={!isValid['yearly-contribution'] ? styles.fallback: ''} value={userInput['yearly-contribution']} type="number" id="yearly-contribution" onChange={event =>{changeHandler(event.target.id,event.target.value)}}/>
          </p>
        </div>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input className={!isValid['expected-return'] ? styles.fallback: ''} value={userInput['expected-return']} type="number" id="expected-return" onChange={event =>{changeHandler(event.target.id,event.target.value)}}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input className={!isValid['duration'] ? styles.fallback: ''} value={userInput['duration']} type="number" id="duration" onChange={event =>{changeHandler(event.target.id,event.target.value)}}/>
          </p>
        </div>
        <p className={styles.actions}>
          <button type="reset" className={styles.buttonAlt} onClick={resstHandler}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
          <button type="button" className={styles.button} onClick={clickClearHandler}>Clear</button>
        </p>
      </form>
    );
}

export default UserInput;