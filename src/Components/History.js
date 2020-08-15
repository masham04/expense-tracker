import React, { useContext } from 'react'
import '../App.css'
import { Transaction } from './Transaction';
import { Globalcontext } from '../Context/Globalstate';

export const History = () => {
  const {transactions} = useContext(Globalcontext); 
return (
    <div>
      <hr></hr>
       <h3>History</h3>
       <ul className='list'>
       {transactions.map(el => (<Transaction key={el.id} el={el}/>))}
       </ul>
            <hr></hr>
    </div>
    )
}



