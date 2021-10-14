import React, { Component } from 'react';
import { Navbar } from '../Components/Navbar';
import {Products} from '../Components/Products';

export class Home extends Component {
  render() {
    return (
      <div className='wrapper'>
       <Navbar/>
       <Products/>
      </div>
    )
  }
}

export default Home
