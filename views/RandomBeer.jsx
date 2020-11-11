const React = require('react');
const Layout = require('./Layout'); 


function RandomBeer (props) {
  const oneBeer = props.oneBeer;
  return (
    <Layout>

      <div>
       
              <div>
                <img src={props.oneBeer.image_url} width="200" alt="" />
                <h3>{props.oneBeer.name}</h3>
                <p>{props.oneBeer.description}</p>
                <h5>{props.oneBeer.tagline}</h5>
                <ul>{
                    props.oneBeer.food_pairing.map((str) =>{
                        return <li>{str}</li>
                    })}
                </ul>
                <p>{props.oneBeer.brewers_tips}</p>
                
            </div>
         
      </div>

    </Layout>
  );
}

module.exports = RandomBeer;