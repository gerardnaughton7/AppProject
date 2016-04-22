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

.controller('WorkCtrl', function($scope) {})

.controller('PersonalCtrl', function($scope,Task) {
  $scope.data = Task.data;
});
