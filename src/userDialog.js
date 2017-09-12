import React,{Component} from 'react'
import './userDialog.css'
import {signUp,signIn,resetPasswordByEmail} from './leanCloud'
import SignUpOrSignIn from './signuporsignin'
import ForgetPassword from './forgetpassword'

export default class UserDialog extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedTab: 'signUpOrSignIn',
      formData:{
        username:'',
        password:'',
        email:''
      }
    }
  }

  changeFormData(key,e){
    //let attr = e.target.name
    //无法通过 attr 取值，因为是获取到 SignUpOrSignIn组件下的SignInForm 的 input 输入框的 name 值
    //无法将 name 值传递进来，所有直接传递 key 来获取是 username / password / email
    //并且 key 必须是第一个参数，若是第二个参数，则运行时 bind(this)报错为 undefined
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.formData[key] = e.target.value
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
    stateCopy.formData.email = ''
    this.setState(stateCopy)
  }
  render(){
    return(
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          {this.state.selectedTab === 'signUpOrSignIn'? <SignUpOrSignIn 
          formData={this.state.formData} onSignUp={this.signUp.bind(this)} 
          onSignIn={this.signIn.bind(this)} 
          onChange={this.changeFormData.bind(this)} 
          onFogetPassword={this.showFogetPassword.bind(this)}
          /> : <ForgetPassword 
          onSubmit={this.resetPassword.bind(this)} 
          formData={this.state.formData} 
          onChange={this.changeFormData.bind(this)}
          onReturnToSignIn={this.returnToSignIn.bind(this)}/>}
        </div>
      </div>
    )
  }
}