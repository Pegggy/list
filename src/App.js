import React, { Component } from 'react';
import './App.css';
import TodoInput from './todoInput';
import TodoItem from './todoItem';
import 'normalize.css';
import './reset.css';



class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        newTodo: '',
        todoList:[]
      }
  }
    changTitle(e){
      this.setState({
        newTodo: e.target.value,
        todoList: this.state.todoList
      })
      console.log(this.state.newTodo)
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
    toggle(e,todo){
      todo.status = todo.status === 'completed' ? '':'completed'
      this.setState(this.state)
      console.log(todo.status);
    }
  render(){
    let todos = this.state.todoList.map((item,index)=>{
      return(
      <li key={index}>
        <TodoItem todo={item} onToggle={this.toggle.bind(this)}/>  
      </li>
      )
    })
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}  onSubmit={this.addTodo.bind(this)} onChange={this.changTitle.bind(this)} />
        </div>  
        <ol>
          {todos}
        </ol>
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
