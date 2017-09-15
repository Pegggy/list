import React from 'react'

export default function (props) {
  return(
    <form className="signUp" 
    onSubmit={props.onSubmit}>{/*注册*/}
      <div className="row">
        <input type="text" name="username" 
        placeholder="用户名"
        value={props.formData.username}
        onChange={props.onChange.bind(null,"username")}/>
        <i className="iconfont">&#xe78c;</i>
      </div>
      <div className="row">
        <input type="password" name="password" 
        placeholder="密码（6位以上字母加数字)"
        value={props.formData.password}  
        onChange={props.onChange.bind(null,"password")}/>
        <i className="iconfont">&#xe6c0;</i>
      </div>
      <div className="row">
        <input type="text" name="email" 
        placeholder="邮箱"
        value={props.formData.email}
        onChange={props.onChange.bind(null,"email")}/>
        <i className="iconfont">&#xe7bd;</i>
      </div>
      <div className="row actions">
        <button type="submit">注册</button>
      </div>
    </form>
  )
}