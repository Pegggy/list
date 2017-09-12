import React,{Component} from 'react'

export default class ForgetPassword extends Component{
  render(){
    return(
      <div className="forgetPassword">
        <h3>重置密码</h3>
        <form  className="forgetPassword" 
        onSubmit={this.props.onSubmit.bind(this)}>
          <div className="row">
            <label>邮箱：
              <input type="text" name="email" value={this.props.formData.email}
              onChange={this.props.onChange.bind(null,"email")} />
            </label>
          </div>
          <div className="row actions">
            <button type="submit">重置密码</button>
            <a href="#" onClick={this.props.onReturnToSignIn}>返回登录</a>
          </div>
        </form>
      </div>      
    )
  }
}