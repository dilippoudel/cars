import React, { Component } from 'react';
import SkyLight from 'react-skylight';
class AddCar extends Component {
    constructor(props){
        super(props);
        this.state = {brand : '', model : '', year: '', color : '', price : ''};
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const {brand, model, year,color, price} = this.state;
        let newCar = {brand : brand, model : model, color : color, price: price, year : year}
        this.props.addCar(newCar);
        this.refs.addDialog.hide();
    }

    cancelSubmit = (event) => {
        event.preventDefault(); 
        this.refs.addDialog.hide(); 
      }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div>
                <SkyLight hideOnOverlayClicked ref="addDialog">
          <h3>New car</h3>
          <form>
            <input type="text" placeholder="Brand" name="brand" 
              onChange={this.handleChange}/><br/> 
            <input type="text" placeholder="Model" name="model" 
              onChange={this.handleChange}/><br/>
            <input type="text" placeholder="Color" name="color" 
              onChange={this.handleChange}/><br/>
            <input type="text" placeholder="Year" name="year" 
              onChange={this.handleChange}/><br/>
            <input type="text" placeholder="Price" name="price" 
              onChange={this.handleChange}/><br/>
            <button onClick={this.handleSubmit}>Save</button>
            <button onClick={this.cancelSubmit}>Cancel</button>     
          </form> 
        </SkyLight>
        <div>
            <button style = {{'margin' : '10px'}} onClick = {() => this.refs.addDialog.show()}>New Car</button>
        </div>
            </div>
        );
    }
}

export default AddCar;