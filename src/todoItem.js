import React,{Component} from 'react';
import './todoitem.css';
export default class TodoItem extends Component{
  render(){
    return <div> <input type="checkbox" checked={this.props.todo.status==='completed'} 
    className="todo-item" onChange={this.toggle.bind(this)}/>{this.props.todo.title}</div>
  }
  toggle(e){
    this.props.onToggle(e,this.props.todo);
  }
}