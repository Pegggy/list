import React,{Component} from 'react';
import './todoInput.css';
export default class TodoInput extends Component{
  render(){
    return <input type="text" value={this.props.content} onChange={this.changTitle.bind(this)} className="TodoInput" onKeyPress={this.submit.bind(this)}/>
  }
  submit(e){
    if(e.key === 'Enter'){
      this.props.onSubmit(e);
    }
  }
  changTitle(e){
    this.props.onChange(e);
  }
}