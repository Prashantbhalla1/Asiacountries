
import "./App.css";
import Card from "./card";
import { useState,useEffect } from "react";


let ee=1;

function App() {


  const [countries, sc] = useState([]);
 
  useEffect(()=>{
    data();

  },[ee]);

  async function data() {
    const response = await fetch(
      "https://restcountries.eu/rest/v2/region/asia"
    );
    const da = await response.json();

    sc(da);
  }


  return (
    <>
      <h1>Asia</h1>
      <button onClick={data}>Refresh</button>
      <div className="box">


       {countries.map((e,i)=>{
         let border="",language="";
         let n=e.borders.length;
         e.borders.map((e,i)=>{
           border+=e;
          border+= i==n-1?'':', ';



         })
         let n1=e.languages.length;
         e.languages.map((e,i)=>{
          language+=e.name;
         language+= i==n1-1?'':', ';



        })





         return (
          <Card
          key={i}
          src={e.flag}
          name={e.name}
          capital={e.capital}
          region={e.region}
          subregion={e.subregion}
          population={e.population}
          borders={border}
          languages={language}
        />
          )
       })}


        
        
      </div>
    </>
  );
}

export default App;
