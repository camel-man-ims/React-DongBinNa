import React, {Component} from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: `/user/test`
  })


class CustomerAdd extends Component{
    constructor(props){
        super(props)
        this.state={
            // file:null, // byte형태의 data
            name:'',
            age:'',
            gender:'',
            job:'',
            // fileName:'' // 이미지의 이름
        }
    }

    handleFormSubmit = (e)=>{
        e.preventDefault()
        this.addCustomer()
    }

    handFileChange = (e)=>{
        this.setState({
            file: e.target.files[0], // e.target = event가 발생한 input값 자체 
            fileName: e.target.value
        })
    }

    handleValueChange = (e)=>{
        let nextState={}
        nextState[e.target.name] = e.target.value
        this.setState(nextState)
    }

    addCustomer = ()=>{
        const url = '/user/test'
        const formData = new FormData();
        // formData.append('img',this.state.file)
        formData.append('name',this.state.name)
        formData.append('age',this.state.age)
        formData.append('gender',this.state.gender)
        formData.append('job',this.state.job)

        // const config = {
        //     headers:{
        //         'content-type':'multipart/form-data'
        //     }
        // }
        var object = {}
        formData.forEach(function(value,key){
            object[key]=value
        })
        console.log(object)

        api.post('/',
        
         object
            // name:"임얼조",
            // age:21,
            // gender:"남자",
            // job:"대통령"
        
         
        )
       
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                {/* 프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handFileChange}/><br/> */}
                이름: <input type="text" name="name" value={this.state.name} onChange={this.handleValueChange}/><br/>
                나이: <input type="text" name="age" value={this.state.age} onChange={this.handleValueChange}/><br/>
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;