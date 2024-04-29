import React, { useContext, useState } from 'react';
import './App.css';
import { lazy, Suspense } from 'react';
import countContext from "./components/context"

function App() {
  const [count , setCount] = useState(0) ;

  return (
   <>
    <countContext.Provider value={{ count, setCount }}>
   <div>
   <Count></Count>
  </div>
   </countContext.Provider>
  
   </>
       
  
  );
}
export default App;
function Count()

{ 
  console.log("i am rendered");
  return (<>
<CountRenderer></CountRenderer>
<Buttons ></Buttons>
  
  </>);
  
  
}
function CountRenderer()
{
  const {count} = useContext(countContext) ;
  return (<>
    <h1>count is {count}</h1>
    </>)
}
function Buttons()
{ const {count ,setCount} =   useContext(countContext) 
  return (
    <>
  <button onClick={()=>{setCount(count+1)}}>Increase count</button>
<button onClick={()=>{setCount(count-1)}}>Decrease count</button>
    </>
  )

}
