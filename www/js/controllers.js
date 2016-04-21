angular.module('starter.controllers', [])

.controller('AddTaskCtrl', function($scope) {})

.controller('WorkCtrl', function($scope) {})

.controller('PersonalCtrl', function($scope) {
  var data = {
    newTask: ""
  };
  
  function addTask() {
    Task.addTask(data.newTask);
    data.newTask = "";
  }
  
  $scope.data = data;
  $scope.addTask = addTask;

});
