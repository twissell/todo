var todoAppControllers = angular.module('todoAppControllers', []);

todoAppControllers.controller('TodoListCtrl', function($scope, todoStorage) {

  $scope.stateOptions = ['all', 'active', 'completed'];

  //localStorage.removeItem('todos');
  //localStorage.removeItem('stateOption');
  $scope.todos = todoStorage.get();
  $scope.stateOption = localStorage.getItem('stateOption') || 'all';

  $scope.stateOptionChange = function(stateOption) {
    localStorage.setItem('stateOption', stateOption);
  }

  $scope.addTodo = function() {
    $scope.todos.push({
      'content': $scope.newTodo.trim(),
      'completed': false
      }
    ); 

    todoStorage.put($scope.todos);
  };

  $scope.removeTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    $scope.todos.splice(todoIndex, 1);
   
    todoStorage.put($scope.todos);
  };

  $scope.removeCompleted = function() {
    filtered = []; 
    for(var i = 0; i < $scope.todos.length; i++) {
      if($scope.todos[i].completed != true) {
        filtered.push($scope.todos[i])
      }
    }
    $scope.todos = filtered;
   
    todoStorage.put($scope.todos);
  };

  $scope.todoCompleted = function(todo) {
    todoStorage.put($scope.todos);
  }

});

