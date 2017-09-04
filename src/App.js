import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './todoInput';
import TodoItem from './todoItem';
import 'normalize.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        newTodo: 'task1',
        todoList:[
          {id:1,
          title:'买菜',
          status:'completed',
          delete: false},
          {id:2,
          title:'烧饭',
          status:'completed',
          delete: false},
          {id:3,
          title:'吃西瓜',
          status:'completed',
          delete: false}
        ]
      }
  }
  render(){
    let todos = this.state.todoList.map((item,index)=>{
      return(
      <li>
        <TodoItem todo={item} />  
      </li>
      )
    })
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} />
        </div>  
        <ol>
          {todos}
        </ol>
      </div>
    )
  }
}

export default App;
