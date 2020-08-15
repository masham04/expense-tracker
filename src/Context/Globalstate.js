import React,{createContext, useReducer} from 'react'
import AddReducer from './AddReducer'

const initialstate = {
    transactions: [
        {id: 1, text: 'books',amount: 230},
        {id: 2, text: 'Bread',amount: -340}
    ]
}

export const Globalcontext = createContext(initialstate);

export const Globalprovider = ({children}) => {
 
    let[state,dispatch] = useReducer(AddReducer,initialstate);
      
    function deletetransaction(id) {
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
        })
    }
    
    return(
        <Globalcontext.Provider value={{transactions: state.transactions,deletetransaction}}>
                {children}
        </Globalcontext.Provider>
    )
}