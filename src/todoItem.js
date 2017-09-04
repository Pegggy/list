import React,{Component} from 'react';
import './todoitem.css';
export default class TodoItem extends Component{
  render(){
    return <div className="todo-item">{this.props.todo.title}</div>
  }
}