import React from'react'
import ReactDOM from 'react-dom'

class Thermometer extends React.Component{
    constructor(props){
        super(props);
        this.state = {input: '', input1: '', input2: ''};
        
        this.celcius = this.celcius.bind(this)
        this.kelvin = this.kelvin.bind(this)
        this.farenheit = this.farenheit.bind(this)
        
        this.conversion = this.conversion.bind(this)
        this.conversion1 = this.conversion1.bind(this)
        this.conversion2 = this.conversion2.bind(this)
    }

    conversion(){
        this.setState(newValue => ({
            input1: this.state.input !== '' ? parseInt(newValue.input) + 273 : ''
            
        }));

        this.setState(newValue => ({
            input2: this.state.input !== '' ? parseInt(newValue.input)*1.8 + 32 : ''
            
        })); 
        
    }

    conversion1(){
        {/* Kelvin to Celcius */}
        this.setState(newValue1 => ({
            input: this.state.input1 !== '' ? (parseInt(newValue1.input1) - 273).toFixed(2) : ''
            
        }));
        {/* Kelvin Farenheit */}
        this.setState(newValue1 => ({
            input2: this.state.input1 !== '' ? ((parseInt(newValue1.input1)*1.8 - 459.7)).toFixed(2) : ''
            
        })); 
        
    }

    conversion2(){
        {/* Farenheit to Celcius*/}
        this.setState(newValue2 => ({
            input: this.state.input2 !== '' ? ((parseInt(newValue2.input2) - 32)/1.8).toFixed(2) : ''
            
        }));
        {/* Farenheit to Kelvin */}
        this.setState(newValue2 => ({
            input1: this.state.input2 !== '' ? ((parseInt(newValue2.input2) + 459.67)*0.556).toFixed(2) : ''
            
        })); 
        
    }

     
    celcius(event){
        this.setState({
            input: event.target.value
        })
    }

    kelvin(event){
        this.setState({
            input1: event.target.value
        })
    }

    farenheit(event){
        this.setState({
            input2: event.target.value
        })
    }

    render(){
        
        return(
            
            <div className = "container">
                <h1>THERMOMETER CONVERTER</h1>
                <p>Our offline thermometer converter converts temperature values between three different temperature scales: the Celcius Scale, the Farenheit Scale and the Kelvin Scale.</p>
                <input value = {this.state.input} placeholder = 'Celcius' onChange = {this.celcius} />
                <button onClick = {this.conversion}>Celcius</button>
                <input value = {this.state.input1} onChange = {this.kelvin} placeholder = 'Kelvin' />
                <button onClick = {this.conversion1}>Kelvin</button>
                <input value = {this.state.input2} placeholder = 'Farenheit' onChange = {this.farenheit}/>
                <button onClick = {this.conversion2}>Farenheit</button>                            
            </div>  
                 
                );           
    }

}


export default Thermometer;