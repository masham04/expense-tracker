import React, { useContext } from 'react'
import { Globalcontext } from '../Context/Globalstate'

export const Transaction = ({el}) => {
    const {transactions} = useContext(Globalcontext);
    const {deletetransaction} = useContext(Globalcontext);
    return (
        <div>
            <li>{el.text}<span>${el.amount}</span>
            <button className='delete-btn' onClick={() => deletetransaction(el.id)}>x</button>
             </li>
        </div>
    )
}