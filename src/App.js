import logo from "./logo.svg";
import "./App.css";
import Card from "./card";
import { useState } from "react";

let initial = [];
async function data() {
  const response = await fetch("https://restcountries.eu/rest/v2/region/asia");
  const da = await response.json();
  console.log(da);
  initial = da;
}
data();

function App() {
  const [countries, sc] = useState(initial);

  async function data() {
    const response = await fetch(
      "https://restcountries.eu/rest/v2/region/asia"
    );
    const da = await response.json();
    console.log(da);
    sc(da);
  }

  return (
    <>
      <h1>Asia</h1>
      <button onClick={data}>Refresh</button>
      <div className="box">


       {countries.map((e)=>{
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
