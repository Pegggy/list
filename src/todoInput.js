import React,{Component} from 'react';
import './todoInput.css';

export default function(props){
  return (
    <input type="text" placeholder="What needs to be done?" 
    className="TodoInput" 
    value={props.content} 
    onChange={changTitle.bind(null,props)} 
    onKeyPress={submit.bind(null,props)}/>
  )
}
function changTitle(props,e){
  props.onChange(e);
}
function submit(props,e){
  if(e.key === 'Enter'){
    if(e.target.value.trim() !== ''){
      props.onSubmit(e)
    }
  }
}