import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import {Balance} from './Components/Balance';
import {IncomeExpence} from './Components/IncomeExpence';
import {History} from './Components/History';
import {AddTransaction} from './Components/AddTransaction';

import {Globalprovider} from './Context/Globalstate'

function App() {
  
  return(
    <Globalprovider>
        <Header />
        <Balance />
        <IncomeExpence />
        <History />
        <AddTransaction />
    </Globalprovider>
  )
}
export default App;
