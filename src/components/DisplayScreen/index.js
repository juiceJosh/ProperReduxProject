import React, {Component} from 'react'
import {connect} from 'react-redux'
import {delete_Log} from '../../redux/actions'

import './DisplayScreen.scss'

export class index extends Component {

    handleDelete(infoId, e) {
        this.props.delete_Log(infoId)
        console.log(infoId)
    }

    render() {

        const data = this.props.credentials

        const logList = data.length ? (
            data.map(info => {
                    return(
                        <div className="border" key={info.id}>
                            <span>{info.user} </span>
                            <span>{info.password}</span>
                            <button className="delBtn" onClick={this.handleDelete.bind(this, info.id)}>x</button>
                        </div>
                    )
                })
            ) : (
                <p> No one has logged in yet! </p>
            )
        return (
            <div>
                {logList}
            </div>
        )
    }
    
} 

const mapStateToProps = state =>({  
    credentials: state.login.credentials
})

export default connect(mapStateToProps, {delete_Log})(index)

//react expects a unique key on every surrounding element that we return inside the map function, when we output them the browser so it can identify that specific item