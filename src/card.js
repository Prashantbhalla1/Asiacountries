import './card.css'
const Card=(props)=>{
return (

<div className="card">
    <div className="head">
<img src={props.src} ></img>
<h2>{props.name}</h2>
</div>
<div className="detail" >
<p>Capital : <span>{props.capital}</span></p>
<p>Region : <span>{props.region}</span></p>
<p>Subregion : <span>{props.subregion}</span></p>
<p>Population : <span>{props.population}</span></p>
<p>Borders : <span>{props.borders}</span></p>
<p>Languages : <span>{props.languages}</span></p>
</div>




</div>





)
}
export default Card;