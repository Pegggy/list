import React,{Component} from 'react'
import './userDialog.css'

export default class UserDialog extends Component{
  constructor(props){
    super(props)
    this.state = {
      selected: 'signUp',
      formData:{
        username:'',
        password:''
      }
    }
  }
  switch(e){
    this.setState({
      selected: e.target.value
    })
  }
  // changeUserName(e){
  //   let stateCopy = JSON.parse(JSON.stringify(this.state))
  //   stateCopy.formData.username = e.target.value
  //   this.setState(stateCopy)
  // }

  // changePassword(e){
  //   let stateCopy = JSON.parse(JSON.stringify(this.state))
  //   stateCopy.formData.password = e.target.value
  //   this.setState(stateCopy)
  // }  
  changeFormData(e){
    const attr = e.target.name
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.formData[attr] = e.target.value
    console.log(stateCopy)
    this.setState(stateCopy)
  }  
  render(){
    let signUpForm = (
      <form className="signUp" >{/*注册*/}
        <div className="row">
          <label>用户名：</label>
          <input type="text" name="username" value={this.state.formData.username}
          onChange={this.changeFormData.bind(this)}/>
        </div>
        <div className="row">
          <label>密码：</label>
          <input type="password" name="password" value={this.state.formData.password}  
          onChange={this.changeFormData.bind(this)}/>
        </div>
        <div className="row actions">
          <button type="submit">注册</button>
        </div>
      </form>
    )
    let signInForm = (
      <form className="signIn">{/*登录*/}
        <div className="row">
          <label>用户名：</label>
          <input type="text" name="username"  value={this.state.formData.username} 
          onChange={this.changeFormData.bind(this)}/>
        </div>
        <div className="row">
          <label>密码：</label>
          <input type="password" name="password" value={this.state.formData.password}
          onChange={this.changeFormData.bind(this)}/>
        </div>
        <div className="row actions">
          <button type="submit">登录</button>
        </div>
      </form>
    )
    return(
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          <nav onChange={this.switch.bind(this)}>
            <label><input type="radio" value="signUp" checked={this.state.selected === "signUp"}/>注册</label>
            <label><input type="radio" value="signIn" checked={this.state.selected === "signIn"}/>登录</label>
          </nav>
          <div className="panels">
          {this.state.selected === 'signUp'? signUpForm : null}
          {this.state.selected === 'signIn'? signInForm : null}
          </div>
        </div> 
      </div>
    )
  }
}