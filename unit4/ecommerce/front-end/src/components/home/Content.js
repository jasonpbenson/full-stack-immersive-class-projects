import React from 'react';
import ItemCard from '../utility/ItemCard';

function Content(props){
    return(
        <div className="row">
            <div className="col s12">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    )
}

export default Content