import React, {useState} from "react";
import Display from "./components/display";
import BtnComponent  from "./components/btnComponent";
import './App.css';

function App() {
   const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
   const [interv, setInterv] = useState();
   const [status, setStatus] = useState(0);

   //not started  = 0
   //started = 1
   //paus = 2

   const start = () => {
      run();
      setStatus(1);
      setInterv(setInterval(run, 10));
    
   };

   let updatedS = time.s,
       updatedM = time.m,
       updatedH = time.h;
   
   const run = () => {
      if (updatedM === 60) {
         updatedH++;
         updatedM = 0;
      }
      if (updatedS === 60) {
         updatedS = 0;
         updatedM++;
      }
      updatedS++;
      return setTime({ s: updatedS, m: updatedM, h: updatedH });
      
   }

   const wait = () => {
      clearInterval(interv);
      setStatus(2);
   };

   const reset = () => {
      clearInterval(interv);
      setStatus(0);
      setTime({ s: 0, m: 0, h: 0 });
   };

   const stop = () => reset();

   return (
      <div className="main-section">
         <div className="clock-holder">
            <div className="stopwatch">
               <Display time={time}/>
               <BtnComponent status={status}  start={start} wait={wait} stop={stop} reset={reset}/>
</div>
         </div>
      </div>
   );
}

export default App;