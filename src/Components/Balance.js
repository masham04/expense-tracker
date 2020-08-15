import React, { useContext } from 'react'
import { Globalcontext } from '../Context/Globalstate'

export const Balance = () => {
   const {transactions} = useContext(Globalcontext);
   const amount = transactions.map(el => el.amount);
   const total = amount.reduce((el,up) => (el += up),0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h2>${total}</h2>
            <hr></hr>
        </div>
    )
}
