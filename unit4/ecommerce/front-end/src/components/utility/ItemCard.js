import React from 'react';

function ItemCard(props){
    const images = props.data.screenshot_url.split(',');
    const rand = Math.floor(Math.random() * images.length)
    const image =images[rand];
    return(
        <div className="col s3 game-card">
          <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={image} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{props.data.name}<i className="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{props.data.name}<i className="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>
      </div>        
    )
}

export default ItemCard