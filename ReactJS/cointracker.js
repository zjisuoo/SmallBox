import Button from "./Button";
import styles from "./App.module.css";
import React, { useEffect, useState } from 'react'; 

function App() {  
  const [loading, setLoading] = useState(true);  
  const [coins, setCoins] = useState([]);  
  const [dollars, setDallars] = useState("");  
  const [result, setResult] = useState("");   
  
  useEffect(() => {    
    fetch("https://api.coinpaprika.com/v1/tickers")      
    .then((response) => response.json())    
    .then((json) => {        
      setCoins(json);        
      setLoading(false);      
    })        
  }, []); 
  
  const onChange = (event) => setDallars(event.target.value);  
  const onSubmit = (event) => {    
    event.preventDefault();    
    setResult(dollars*event.target[1].value);    
  };   
  return (   
    <div>      
      <h1>The Coin ! {loading ? "" : `(${coins.length})`}</h1>      
      {loading ? <strong>Loading...</strong> :        
      <div>          
        <h2>Coin Converter</h2>          
        <form onSubmit={onSubmit}>            
          <input onChange={onChange} value={dollars} type="text"></input>  →              
            <select>            
            {coins.map(coin =>               
              <option key={coin.id} value={coin.quotes.USD.price}>                
                {coin.symbol}             
              </option>            
            )}            
            </select>             
            <button>Convert</button>        
          <h3>The Result is {result} USD </h3>           
        </form>        
      </div>      
      }
      <hr/>      
        <ul>        
          {coins.map(coin => <li key={coin.id}> ({coin.symbol}) : {coin.quotes.USD.price} USD </li>)}      
        </ul>    
      </div>  
      );
    }
export default App;
