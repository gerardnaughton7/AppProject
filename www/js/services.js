angular.module('starter.services', [])
//task factory containing my functions for the controllers
.factory('Task', function() {
  //creating tasks array
  var data = {
    tasks: [
      
    ]
  };
  //add task function which pushes the new title and date onto the tasks array
  function addTask(title) {
    data.tasks.push({title: title, added: new Date()});
  }
  //delete task function deletes the task at that point
  function deleteTask(taskName){
      //loop through the tasks array till the title and taskName match and then removed
      for(var i = 0; i < data.tasks.length; i++)
      {
          if(data.tasks[i].title == taskName)
          {
                data.tasks.splice(i,1);  
          }
      }
  }
  
  return {
    data: data,
    addTask: addTask,
    deleteTask: deleteTask  
  };

});
