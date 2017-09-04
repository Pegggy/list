import React,{Component} from 'react';
import './todoInput.css';
export default class TodoInput extends Component{
  render(){
    return <input type="text" defaultValue={this.props.content} className="TodoInput" onKeyPress={this.submit}/>
  }
  submit(e){
    if(e.key === 'Enter'){
      console.log('我按回车啦~');
    }
  }
}