import React, {Component} from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: `/user/test`
  })

class CustomerDelete extends Component{
   
    deleteCustomer(id){
        const url = '/' + id
        api.delete(url).then(()=>{
        this.props.stateRefresh()
        })
    }

    render(){
        return(
            <button onClick={(e)=>{this.deleteCustomer(this.props.id)}}>
                삭제
            </button>
        )
    }
}

export default CustomerDelete