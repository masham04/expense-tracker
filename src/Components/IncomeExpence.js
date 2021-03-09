import React, { useContext } from 'react'
import { Globalcontext } from '../Context/Globalstate'

export const IncomeExpence = () => {
   const {transactions} = useContext(Globalcontext);
   const amount = transactions.map(el => el.amount);

   const Income = amount.filter(el => el > 0).reduce((el,up) => (el += up),0).toFixed(2);
   const Expense = (amount.filter(el => el < 0).reduce((el,up) => (el += up),0)*-1).toFixed(2);
     
   
    return (
        <div className='inc-exp'>
            <div>
                <h3>Income</h3>
                <p>${Income}</p>
            </div>
            <hr></hr>
            <div>
                <h3>Expense</h3>
                <p>${Expense}</p>
            </div>
        </div>
    )
}
