import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';


function App() {

  const [amount,setAmount]=useState(0);
  const [year,setYear]=useState(0);
  const [rate,setRate]=useState(0);

  const [interest,setInterest]=useState(0);

console.log(amount,year,rate);

const calculate=(e)=>{
  const output= amount*year*rate/100;
  console.log(output);
  setInterest(output);
}

const resetform = () => {
  setAmount(0);
  setYear(0);
  setRate(0);
  setInterest(0);
}

  return (
    
      <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple Interest Calculator</h1>
          <br />
          <p>calculate your simple interest with us ❤️</p>

        </div>
        <br />
        <div className='Total'>
          <h2>
            &#8377; {interest}
          </h2>
          <br />
          <p>Your Total Interest</p>
          <br />
        </div>
        <br />
        <div className='form'>
          <form>
            <div className='input'>
              <TextField id="outlined-basic" onChange={(e)=>setAmount(e.target.value)} label="amount" variant="outlined" /><br />
              <TextField id="outlined-basic"  onChange={(e)=>setYear(e.target.value)} label="year" variant="outlined" />
              <br />
              <TextField id="outlined-basic"  onChange={(e)=>setRate(e.target.value)} label="rate" variant="outlined" />
            </div>
            
            <div className='button'>
            <Button variant="outlined" onClick={e=>calculate()} >Calculate</Button>
            <Button variant="contained" onClick={resetform}>Reset</Button>
            </div>
          </form>
         
        </div>
      </div >
    </div>
    
  );
}

export default App;
