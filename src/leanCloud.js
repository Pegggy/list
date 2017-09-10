import AV from 'leancloud-storage'

const appId = 'lhnGAvlnkiAuvCfGApyI8vLn-gzGzoHsz'
const appKey = 'mcnNtPno10tnYn3GJhk7jipk'
AV.init({ 
  appId: appId, 
  appKey: appKey 
});

export default AV

export function signUp(username,password,successFn,errorFn){
  var user = new AV.User()
  // 设置用户名
  user.setUsername(username)
  // 设置密码
  user.setPassword(password)
  user.signUp().then(function(loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null,user)
  }, function (error) {
    errorFn.call(null,error)
  });
  return undefined
}

function getUserFromAVUser(AVUser){
  console.log(AVUser.id,...AVUser.attributes)
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}