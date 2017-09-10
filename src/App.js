import React, { Component } from 'react';
import './App.css';
import TodoInput from './todoInput';
import TodoItem from './todoItem';
import 'normalize.css';
import './reset.css';
import UserDialog from './userDialog';
import {getCurrentUser,signOut} from './leanCloud'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        newTodo: '',
        todoList:[],
        user: getCurrentUser()||{}
      }
  }
    changTitle(e){
      this.setState({
        newTodo: e.target.value,
        todoList: this.state.todoList
      })
    }
    addTodo(e){
      this.state.todoList.push({
        id: idSet(),
        title: e.target.value,
        status: '',
        delete: false
      })
      this.setState({
        newTodo:'',
        todoList: this.state.todoList
      })
    }
    componentDidUpdate(){
      
    }
    toggle(e,todo){
      todo.status = todo.status === 'completed' ? '':'completed'
      this.setState(this.state)
    }
    delete(e,todo){
      todo.delete = true
      this.setState(this.state)
    }
    onSignUp(user){
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.user = user
      console.log(stateCopy);
      this.setState(stateCopy)
    }
    onSignIn(user){
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.user = user
      this.setState(stateCopy)
    }
    signOut(){
      signOut()
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.user = {}
      this.setState(stateCopy)
    }

    render(){
    let todos = this.state.todoList
        .filter(item => item.delete === false)
          .map((item,index) =>{
            return(
            <li key={index}>
              <TodoItem todo={item} 
              onToggle={this.toggle.bind(this)} 
              onDelete={this.delete.bind(this)}/>  
            </li>
            )
          })
    return (
      <div className="App">
        <h1>{this.state.user.username||'我'}的待办
          {this.state.user.id ? <button onClick={this.signOut.bind(this)}>登出</button> : null}
        </h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}  
          onSubmit={this.addTodo.bind(this)} 
          onChange={this.changTitle.bind(this)} />
        </div>  
        <ol className="todolist">
          {todos}
        </ol>
       {this.state.user.id ? null : 
       <UserDialog onSignUp={this.onSignUp.bind(this)} 
       onSignIn={this.onSignIn.bind(this)}/>}
      </div>
    )
  }
}
let id = 0;
function idSet(){
  ++id;
  return id;
}

export default App;
