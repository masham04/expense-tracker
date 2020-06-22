import React, {useContext} from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../context/globalstate'
export const History = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <h3>History</h3><hr></hr>
            <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
        </div>
    )
}
