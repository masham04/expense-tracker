
export default (state,action) => {
    switch (action.type) {
        case 'DELETE_ITEM':
            return{
               transactions: state.transactions.filter(el => el.id !== action.payload)
            }
            break;
    
        default:
            break;
    }
}