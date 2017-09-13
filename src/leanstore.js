import AV from 'leancloud-storage'
// 声明类型
export default AV
let TodoFolder = AV.Object.extend('TodoFolder');
export function addTodo(todoitem,userid){
  // 新建对象
  let todoFolder = new TodoFolder();
  todoFolder.set('title',todoitem.title);
  todoFolder.set('delete',todoitem.delete);
  todoFolder.set('status',todoitem.status);
  todoFolder.set('id',todoitem.id);
  todoFolder.set('user_id',userid);
  todoFolder.save().then(function (todo) {
    console.log('objectId is ' + todo.id);
  }, function (error) {
    console.error(error);
  });
}

