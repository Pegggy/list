import React,{Component} from 'react'
import './userDialog.css'
import {signUp,signIn,resetPasswordByEmail} from './leanCloud'

export default class UserDialog extends Component{
  constructor(props){
    super(props)
    this.state = {
      selected: 'signUp',
      selectedTab: 'signUpOrSignIn',
      formData:{
        username:'',
        password:'',
        email:''
      }
    }
  }
  switch(e){
    this.setState({
      selected: e.target.value
    })
  }

  changeFormData(e){
    const attr = e.target.name
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.formData[attr] = e.target.value
    this.setState(stateCopy)
  }  
  signUp(e){
    e.preventDefault()
    let {username,password,email} = this.state.formData
    let success = (user) =>{
      this.props.onSignUp.call(null,user)
    }
    let error = (error) =>{
      switch(error.code){
        case 200:
        alert('用户名为空')
        break
        case 202:
        alert('用户名被占用')
        break
        default:
        alert(error)
      }
    }
    if(username && password && email){
      signUp(username,password,email,success,error)
    }    
  }
  signIn(e){
    e.preventDefault()
    let {username,password} = this.state.formData
    let success = (user) => {
      this.props.onSignIn.call(null,user)
    }
    let error = (error) =>{
      switch(error.code){
        case 210:
        alert('用户名与密码不匹配')
        break
        case 211:
        alert('找不到用户')
        break
        default:
        alert(error)
      }
    }
    signIn(username,password,success,error)
  }
  resetPassword(e){
    e.preventDefault()
    resetPasswordByEmail(this.state.formData.email);
  }
  showFogetPassword(){
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.selectedTab = 'forgetPassword'
    this.setState(stateCopy)
  }
  returnToSignIn(){
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.selectedTab = "signUpOrSignIn"
    this.setState(stateCopy)
  }
  render(){
    let signUpForm = (
      <form className="signUp" 
      onSubmit={this.signUp.bind(this)}>{/*注册*/}
        <div className="row">
          <label>用户名：</label>
          <input type="text" name="username" 
          value={this.state.formData.username}
          onChange={this.changeFormData.bind(this)}/>
        </div>
        <div className="row">
          <label>密码：</label>
          <input type="password" name="password" 
          value={this.state.formData.password}  
          onChange={this.changeFormData.bind(this)}/>
        </div>
        <div className="row">
          <label>邮箱：</label>
          <input type="text" name="email" 
          value={this.state.formData.email}
          onChange={this.changeFormData.bind(this)}/>
        </div>
        <div className="row actions">
          <button type="submit">注册</button>
        </div>
      </form>
    )
    let signInForm = (
      <form className="signIn" 
      onSubmit={this.signIn.bind(this)}>{/*登录*/}
        <div className="row">
          <label>用户名：</label>
          <input type="text" name="username"  
          value={this.state.formData.username} 
          onChange={this.changeFormData.bind(this)}/>
        </div>
        <div className="row">
          <label>密码：</label>
          <input type="password" name="password" value={this.state.formData.password}
          onChange={this.changeFormData.bind(this)}/>
        </div>
        <div className="row actions">
          <button type="submit">登录</button>
          <a href="#" onClick={this.showFogetPassword.bind(this)}>忘记密码</a>
        </div>
      </form>
    )
    let signUpOrSignIn = (
      <div className="signUpOrSignIn">
        <nav>
          <label>
            <input type="radio" value="signUp" 
            checked={this.state.selected === 'signUp'} 
            onChange={this.switch.bind(this)} />
            注册
          </label>
          <label>
            <input type="radio" value="signIn" 
            checked={this.state.selected === 'signIn'} 
            onChange={this.switch.bind(this)} />
             登录
          </label>          
        </nav>
        <div className="panels">
          {this.state.selected === "signUp" ? signUpForm : null}
          {this.state.selected === "signIn" ? signInForm : null}
        </div>
      </div>
    )
    let forgetPassword = (
      <div className="forgetPassword">
        <h3>重置密码</h3>
        <form  className="forgetPassword" 
        onSubmit={this.resetPassword.bind(this)}>
          <div className="row">
            <label>邮箱：
              <input type="text" name="email" value={this.state.formData.email}
              onChange={this.changeFormData.bind(this)} />
            </label>
          </div>
          <div className="row actions">
            <button type="submit">重置密码</button>
            <a href="#" onClick={this.returnToSignIn.bind(this)}>返回登录</a>
          </div>
        </form>
      </div>
    )
    return(
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          {this.state.selectedTab === 'signUpOrSignIn'? signUpOrSignIn : forgetPassword}
        </div>
      </div>
    )
  }
}