import React, {useState,useContext } from 'react'
import { Globalcontext } from '../Context/Globalstate'


export const AddTransaction = () => {
    let [text,settext] = useState('');
    let [amount,setamount] = useState();
    const {newtransaction} = useContext(Globalcontext);
    

     const submission = (e) => {
            e.preventDefault();
        const inputtransaction = {
              id: Math.floor(Math.random()* 100000),
              text,
              amount: +amount
        }
            newtransaction(inputtransaction);
            
     }

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={submission}>
            <input type='text' value={text} onChange={(e) => settext(e.target.value)}
             placeholder='Enter the Text ...'></input>

            <input type='number' value={amount} onChange={(e) => setamount(e.target.value)}
             placeholder='Enter the Amount ...'></input>

            <button className='btn'>ADD Transaction</button>
            </form>
        </div>
    )
}
