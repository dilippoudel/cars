import React, { Component } from 'react';
import CarList from './components/carlist';

class App extends Component {
  render() {
    return (
     <CarList/>
    );
  }
}
const Main = () => {
return <main className = "container">
  <App/>
</main >
}



export default Main;