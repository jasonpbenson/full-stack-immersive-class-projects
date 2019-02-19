import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import AtlWeather from './AtlWeather';
import Images from './Images';
import MayorMessage from './MayorMessage';
import About from './About';

// Take the included folder (compressed file) and add the router to it. Steps:

// npm install the router
// Start by adding the router to App
// Change BootstrapNavBar anchor tags to use the Router Link component
// Start by setting the contents to 1, 2, 3, 4 or "Home" on the screen 
// if the user clicks on that link IN A NEW ROUTE. You can make your own component(s).
// Use the components I have included to make an app about Atlanta. Make it so each 
// has its own route and update the nav.
// Include the Home page
// Include the About page
// Include images
// Pass the iamges array as props to the component
// Map through them
// Display them however you want
// Include the weather
// Use state to setup the return once componentDidMount is done. Style it.
// Include the Mayor Message.

let atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <BootstrapNavBar />
          <div className="container main">
            <h1>Main App</h1>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/atlweather" component={AtlWeather} />
          <Route exact path="/images" component={Images} />
          <Route path="/images" exact render={(props)=>{
            return(
              <Images atlImages={atlImages} />
            )
          }} />
          <Route exact path="/message" component={MayorMessage} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
