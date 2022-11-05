import './ExpenseForm.css';
import React from 'react';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = userState('');
    const [enteredAmount, setEnteredAmount] = userState('');
    const [entereddate, setEnteredDate] = userState('');

    const titleChnageHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onClick={titleChnageHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'  min= "0.01" step="0.01" onClick={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2025-12-31" onClick={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions' >
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;