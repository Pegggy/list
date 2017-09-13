import AV from 'leancloud-storage'

const appId = 'lhnGAvlnkiAuvCfGApyI8vLn-gzGzoHsz'
const appKey = 'mcnNtPno10tnYn3GJhk7jipk'
AV.init({ 
  appId: appId, 
  appKey: appKey 
});

export default AV
export const TodoModel = {
  create({title,status,deleted},successFn,errorFn){
    let Todo = AV.Object.extend('Todo')
    let todo = new Todo()
    todo.set('title',title)
    todo.set('status',status)
    todo.set('deleted',deleted)
    let acl = new AV.ACL()
    acl.setPublicReadAccess(false)
    acl.setReadAccess(AV.User.current(),true)
    acl.setWriteAccess(AV.User.current(),true) 
    // 将 ACL 实例赋予 Post 对象
    todo.setACL(acl);
    todo.save().then(function(response){
      successFn.call(null,response.id)
    },function(error){
      errorFn && errorFn.call(null,error)
    });
  },
  getByUser(user,successFn,errorFn){
    let query = new AV.Query('Todo');
    query.find().then(function (todos) {
      let arr = todos.map(function(todo) {
        return {id: todo.id,...todo.attributes}
      });
      console.log(arr)
      successFn.call(null,arr)
    }, function (error) {
      errorFn && errorFn.call(null,error)
    });
  },

}
export function signUp(username,password,email,successFn,errorFn){
  var user = new AV.User()
  // 设置用户名
  user.setUsername(username)
  // 设置密码
  user.setPassword(password)
  user.setEmail(email)
  user.signUp().then(function(loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null,user)
  }, function (error) {
    errorFn.call(null,error)
  });
  return undefined
}

function getUserFromAVUser(AVUser){
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}
export function getCurrentUser(){
  let currentUser = AV.User.current();

  if (currentUser) {
     return getUserFromAVUser(currentUser)
  }
  else {
     return null
  }
}
export function signOut(){
  AV.User.logOut()
  return undefined
}
export function signIn(username,password,successFn,errorFn){
  AV.User.logIn(username, password).then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null,user)
  }, function (error) {
    errorFn.call(null,error)
  });
}
export function resetPasswordByEmail(email,successFn,errorFn){
  AV.User.requestPasswordReset(email).then(function (success) {
    successFn.call()
  }, function (error) {
    errorFn.call(null,error)
  });
}