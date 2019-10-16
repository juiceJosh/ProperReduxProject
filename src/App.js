import React, { Component } from 'react';
import Login from './components/LoginForm'
import Display from './components/DisplayScreen'
import {connect} from 'react-redux'

class App extends Component {
  // state = {
  //   credentials: [
  //     {id: 1, user: 'Juice', password: '1234567890' },
  //     {id: 2, user: 'Box', password: '0987654321' },
  //   ]
  // }
  // delLog = (id) =>{
  //   const credentials = this.state.credentials.filter(credential =>{
  //     return credential.id !== id
  //   })
  //   this.setState({
  //     credentials
  //   })
  // }
  // login = (credential) => {
  //   credential.id = Math.random()
  //   let credentials = [...this.state.credentials, credential];
  //   this.setState ({
  //     credentials
  //   })
  // }
  // login={this.login}
  // credentials={this.state.credentials} delLog={this.delLogl}
  render() {
    return (
      <div className="w-100 row bg-dark">
        <div className="w-50 h-100 col bg-primary">
          <Login />
        </div>
        <div className="w-50 j-100 col bg-success">
          <h1> Log Book </h1>
          <Display/>
        </div>
      </div>
    )
  }
}

export default connect()(App)


