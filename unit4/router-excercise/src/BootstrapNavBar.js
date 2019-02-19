import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class BootstrapNavBar extends Component{
  render(){
    return(
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">WebSiteName</a>
					</div>
					<ul className="nav navbar-nav">
						<Link to="/">Home</Link>
						<Link to="/atlweather">AtlWeather</Link>
						<Link to="/images">Images</Link>
						<Link to="/message">MayorMessage</Link>
						<Link to="/about">About</Link>
					</ul>
				</div>
			</nav>    
		)
		}
	}

export default BootstrapNavBar