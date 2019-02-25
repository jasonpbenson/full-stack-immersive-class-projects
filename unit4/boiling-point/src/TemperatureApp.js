import React, {Component} from "react";
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict'

class TemeratureApp extends Component{
    constructor(){
        super()
        this.state = {
            temperature: 27,
            scale: 'c'
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(value){        
        console.log("Someone changed teh Celsius input box to " +value);
        if(value.target.value.match(/^\d*$/)){      
            this.setState({
                temperature: value.target.value,
                scale: "c"
            })
        }
    }

    handleFahrenheitChange(value){
        console.log("Someone changed the Fahrenheit to " + value);
        if(value.target.value.match(/^\d*$/)){
            this.setState({
                temperature: value.target.value,
                scale: "f"
            })
        }        
    }

    render(){
        const scale = this.state.scale;
        const temp = this.state.temperature;
        let fTemp = "";
        let cTemp = "";
        if(scale === 'c'){
            // convert c to f
            fTemp = (temp * 9 /5) + 32;
            // c is default so don't need to convert
            cTemp = temp;
        }else if(scale === 'f'){
            fTemp = temp;
            cTemp = (temp-32) * 5 / 9
        }

        return(
            <div id="temp-app">
                <TemperatureInput scale="f" temperature={fTemp} onChange={this.handleFahrenheitChange} />
                <TemperatureInput scale="c" temperature={cTemp} onChange={this.handleCelsiusChange} />
                <BoilingVerdict temperature={cTemp}/>
            </div>
        )
    }
}

export default TemeratureApp