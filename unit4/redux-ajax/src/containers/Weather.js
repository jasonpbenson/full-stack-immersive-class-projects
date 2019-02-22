import React, { Component } from 'react';
// weather needs to know about redux
// bc weather state will be updated by the SearchBar
// which is a sibling, not a parent... 
import { connect } from 'react-redux';

class Weather extends Component{
    render(){
        console.log(this.props.weatherData);
        return(
            <h1>Weather</h1>
        )
    }
}

function mapStateToProps(state){
    return{
        weatherData: state.Weather
    }
}

// 'connect' takes max of 2 args:
// 1. map/state function
// 2. the map/dispatch action function

export default connect(mapStateToProps)(Weather);
// export default Weather;