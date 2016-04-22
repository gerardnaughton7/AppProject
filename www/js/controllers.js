angular.module('starter.controllers', [])

.controller('AddTaskCtrl', function($scope, Task) {
    var data = {
    newTask: ""
  };
  
  function addTask() {
    Task.addTask(data.newTask);
    data.newTask = "";
  }
  
  $scope.data = data;
  $scope.addTask = addTask;
})

.controller('AboutCtrl', function($scope) {})

.controller('TasksCtrl', function($scope,Task) {
  
  function deleteTask(taskName){
      Task.deleteTask(taskName);
  }
  $scope.data = Task.data;
  $scope.deleteTask = deleteTask;    
});
