import React, { Component } from 'react';
import axios from 'axios';

class AtlWeather extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		const url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		axios.get(url)
		.then((weatherData)=>{
			this.setState({
				icon: weatherData.data.weather[0].icon,
				temp: weatherData.data.main.temp,
				temp_min: weatherData.data.main.temp_min,
				temp_max: weatherData.data.main.temp_max,
				desc: weatherData.data.weather[0].description
			})
		});
	}

	render(){
		let iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
				<h2><img src={iconUrl} /></h2>
				<h2>{this.state.temp}</h2>
				<h2>{this.state.temp_min}</h2>
				<h2>{this.state.temp_max}</h2>
				<h2>{this.state.desc}</h2>
			</div>
		);
	}
}

export default AtlWeather;
