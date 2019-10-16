import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login  } from '../../redux/actions'

import './LoginForm.scss'

export class index extends Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            user: '',
            password: '', 
        };
        
      }
    
    // handleUser = (e) => {
    //     this.props.userIn(e.target.value );
    // }
    
    // handlePassword = (e) => {
    //     this.props.passIn(e.target.value );
    // }
    handleChange = (e) => {
        this.setState(
            {[e.target.name]:e.target.value}
        )
    }
    submitLogin =(e) => {
        e.preventDefault()
        this.props.login(this.state.user, this.state.password)
    }

    render() {
        return (
            <div className="w-100 d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="d-flex justify-content-center">Login Page</h1>
                    <hr className="line"/>
                    <div className="d-flex flex-column p-4 input-container">
                        <input 
                        type="text" 
                        placeholder="Enter Username"
                        className=" mb-2 input" 
                        name="user"
                        onChange={this.handleChange} 
                        value={this.state.user}
                        />
                       
                        <input 
                        type="text" 
                        className="input mb-4"
                        placeholder="Enter Password"
                        name="password"
                        onChange={this.handleChange} 
                        value={this.state.password}
                        />

                        <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}> Login</button>

                    </div>
                    <p className="d-flex jusitfy-content-center">Powered by Huawei Laptop</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    credentials: state.login.credentials
})


export default connect(mapStateToProps, {login})(index)
