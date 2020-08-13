import React, {Component} from 'react'

class Customer extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.age}</p>
                <p>{this.props.gender}</p>
                <p>COOL</p>
            </div>
        )
    }
}

export default Customer;