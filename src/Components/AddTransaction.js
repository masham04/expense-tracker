import React from 'react'


export const AddTransaction = () => {
    

    
    return (
        <div>
            <h3>Add Transaction</h3>
            <form >
            <input type='text'
             placeholder='Enter the Text ...'></input>

            <input type='number' placeholder='Enter the Amount ...'></input>

            <button className='btn'>ADD Transaction</button>
            </form>
        </div>
    )
}
