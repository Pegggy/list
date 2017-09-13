import AV from 'leancloud-storage'
// 声明类型
let TodoFolder = AV.Object.extend('TodoFolder');
export default function(){
  // 新建对象
  var todoFolder = new TodoFolder();
  todoFolder.set('title','晚饭');
  todoFolder.set('delete',false);
  todoFolder.set('status','');
  todoFolder.set('id',1)
  todoFolder.save().then(function (todo) {
    console.log('objectId is ' + todo.id);
  }, function (error) {
    console.error(error);
  });
}

