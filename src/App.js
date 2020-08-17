import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
import CustomerAdd from './components/CustomerAdd'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import CircularProgress from '@material-ui/core/CircularProgress'

import {withStyles} from '@material-ui/core/styles'

import axios from 'axios'

const styles = theme=>({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit*3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  },
  progress:{
    margin: theme.spacing.unit *2
  }
})

const api = axios.create({
  baseURL: `/user/test`
})


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      dataState:[],
      completed:0
    }
  }

  componentDidMount(){
    this.timer = setInterval(this.progress,20)
    this.callApi()
  }
 
  callApi = async()=>{
    api.get('/').then(res=>{
      this.setState({
        dataState:res.data.userData
      })
    })
  }
 
  progress = ()=>{
    const{ completed } = this.state.completed
    this.setState({
      completed: completed>=100 ? 0 : completed +1
    })
  }

  render(){
    const {classes} = this.props
    return (
      <div>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>나이</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
          this.state.dataState.map(userData=>{
            return(
              <Customer
              img={userData.img}
              key={userData.id}
              id={userData.idx}
              name={userData.name}
              gender={userData.gender}
              age={userData.age}
              job={userData.job}
              />
            )
          })
          }
        </TableBody>
        <TableBody>
          <input type="button" value="get data" onClick={
            function(){
              api.get('/').then(res=>{
                console.log(res.data.userData)
              })
            }
          }></input>
        </TableBody>
      </Table>
    </Paper>
    <CustomerAdd/>
    </div>
  );
}
}

export default withStyles(styles)(App);
