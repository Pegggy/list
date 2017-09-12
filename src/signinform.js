import React from 'react'

export default function(props){
  return(
    <form className="signIn" 
    onSubmit={props.onSubmit}>{/*登录*/}
      <div className="row">
        <label>用户名：</label>
        <input type="text" name="username"  
        value={props.formData.username} 
        onChange={props.onChange.bind(null,"username")}/>
      </div>
      <div className="row">
        <label>密码：</label>
        <input type="password" name="password" value={props.formData.password}
        onChange={props.onChange.bind(null,"password")}/>
      </div>
      <div className="row actions">
        <button type="submit">登录</button>
        <a href="#" onClick={props.onFogetPassword}>忘记密码</a>
      </div>
    </form>
  )
}