import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/globalstate';
export const AddTransaction = () => {
    const [text, settext] = useState();
    const [amount, setamount] = useState();
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
  
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
  
      addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add new transaction</h3><hr></hr>
      <form id="form" onSubmit={onSubmit}>
        <div class="form-control">
          <label for="text"><strong>Text</strong></label>
          <input type="text" value={text} onChange={(e) => settext(e.target.value)} placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"><strong>Amount</strong><br />
            (negative - expense, positive - income)</label>
          
          <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
        </div>
    )
}
