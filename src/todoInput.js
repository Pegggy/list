import React,{Component} from 'react';
import './todoInput.css';
export default class TodoInput extends Component{
  render(){
    return <input type="text" value={this.props.content} className="TodoInput" />
  }
}