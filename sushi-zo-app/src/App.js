import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Omakase from './components/Omakase'
import AboutUs from './components/AboutUs'
import Locations from './components/Locations'
import Press from './components/Press'
import Footer from './components/Footer'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      scrollY: 0,
      sizeX: 0,
      sizeY: 0
    }
    this.handleScroll=this.handleScroll.bind(this);
    this.handleResize=this.handleResize.bind(this);
  }
  handleScroll(){
    this.setState({
      scrollY:window.scrollY
    });
  }
  handleResize(){
    console.log(window.innerHeight)
    this.setState({
      sizeX:window.innerWidth,
      sizeY:window.innerHeight
    })
  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);
    window.addEventListener('resize',this.handleResize);
    this.setState({
      sizeX:window.innerWidth,
      sizeY:window.innerHeight
    })
  }
  render(){
    return (
      <div className="App">
        <Header
          scrollY={this.state.scrollY}
          sizeX={this.state.sizeX}
          sizeY={this.state.sizeY}
        />
        <Nav 
          scrollY={this.state.scrollY}
          sizeX={this.state.sizeX}
          sizeY={this.state.sizeY}
        />
        <Omakase />
        <AboutUs />
        <Locations />
        <Press />
        <Footer />
      </div>
    )
  }
}

export default App;
