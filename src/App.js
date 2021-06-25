import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Counter />
        {/* <Message /> */}
        {/* <Greet name='Bruce' heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name='Clark' heroName="SuperMan"/>
        <button>Action</button>
        <Greet name='Diana' heroName="WonderWomen"/>
        <Welcome name='Bruce' heroName="Batman"/>
        <Welcome name='Clark' heroName="SuperMan"/>
        <Welcome name='Diana' heroName="WonderWomen"/> */}
      </div>
    )
  }
}

export default App
