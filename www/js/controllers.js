angular.module('starter.controllers', [])
//contains 2 controllers for addTask tab and task tab
//Task allows the data from services to be shared between controllers
.controller('AddTaskCtrl', function($scope, Task) {
    var data = {
    newTask: ""
  };
  //addFunctions passes through data to the services/factory in order to add it to the tasks array
  function addTask() {
    Task.addTask(data.newTask);
    data.newTask = "";
  }
  
  $scope.data = data;
  $scope.addTask = addTask;
})
//TasksCtrl passes through the task which you want to delete to the services factory
.controller('TasksCtrl', function($scope,Task) {
  
  function deleteTask(taskName){
      Task.deleteTask(taskName);
  }
  $scope.data = Task.data;
  $scope.deleteTask = deleteTask;    
});
