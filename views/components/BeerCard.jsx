const React = require('react'); 

function BeerCard (props) {
    return (
<div>
  <img src={props.beer.image_url} width="200" alt="" />
    <h3>{props.beer.name}</h3>  
    <h5>{props.beer.tagline}</h5>  
    <p>{props.beer.description}</p>  
        {props.hideDetails 
            ? null 
            : (<div><h4>Food Pairing</h4>  
            <ul>
            { props.beer.food_pairing.map( (food, i) => {
            return ( <li key={i}> {food} </li> );
             })}
            </ul>

            <p><strong>Brewers Tips:</strong> {props.beer.brewers_tips} </p>
            </div>)}
    

</div>
        )}

        module.exports = BeerCard;
        