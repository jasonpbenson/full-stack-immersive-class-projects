// import React, { Component } from 'react';
// import axios from 'axios';

// class AtlWeather extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state={
// 			icon: "",
// 			temp: "",
// 			temp_min: "",
// 			temp_max: "",
// 			desc: ""			
// 		}
// 	}

// 	componentDidMount() {
// 		const url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
// 		axios.get(url)
// 		.then((weatherData)=>{
// 			let weatherResults = weather.data.results;
// 			this.setState({
// 				AtlWeahter: AtlWeather
// 			})
// 		});
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<h1>Real-time Atlanta Weather!</h1>

// 			</div>
// 		);
// 	}
// }

// export default AtlWeather;
