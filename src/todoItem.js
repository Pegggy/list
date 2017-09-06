import React,{Component} from 'react';
import './todoitem.css';
export default class TodoItem extends Component{
  render(){
    return <div> 
      <input type="checkbox" checked={this.props.todo.status==='completed'} 
        className="todo-item" onChange={this.toggle.bind(this)}/>
      {this.props.todo.title}
      <button className="del" onClick={this.delete.bind(this)}>删除</button>
    
    </div>
  }
  toggle(e){
    this.props.onToggle(e,this.props.todo);
  }
  delete(e){
    this.props.onDelete(e,this.props.todo);
  }
}