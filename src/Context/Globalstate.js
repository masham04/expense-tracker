import React,{createContext, useReducer} from 'react'
import AddReducer from './AddReducer'

const initialstate = {
    transactions: [
        

    ]
}

export const Globalcontext = createContext(initialstate);

export const Globalprovider = ({children}) => {
 
    let[state,dispatch] = useReducer(AddReducer,initialstate);
      
    function deletetransaction(id) {
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
        }); }

        function newtransaction(transaction) {
            dispatch({
                type: 'NEW_TRANSACTION',
                payload: transaction
            }); }
    
    
    return(
        <Globalcontext.Provider value={{transactions: state.transactions,deletetransaction,newtransaction}}>
                {children}
        </Globalcontext.Provider>
    )
}