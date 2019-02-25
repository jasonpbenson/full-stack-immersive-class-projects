import React, { Component } from 'react';
import Carousel from './Carousel';
import MiniNav from './MiniNav';
import Content from './Content';
import './home.css';

class Home extends Component{
    render(){
        return(
            <div className="col s12 home">
                <Carousel />
                <MiniNav />
                <Content />
            </div>
        )
    }
}

export default Home;