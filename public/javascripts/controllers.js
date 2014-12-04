var todoAppControllers = angular.module('todoAppControllers', []);

todoAppControllers.controller('TodoListCtrl', function($scope, todoStorage) {

  $scope.states = ['all', 'active', 'completed'];

  //localStorage.removeItem('todos');
  //localStorage.removeItem('stateOption');
  $scope.todos = todoStorage.get();
  
  $scope.state = localStorage.getItem('state') || 'all';

  $scope.stateChange = function(state) {
    localStorage.setItem('state', state);
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

  $scope.removeAll = function() {
    $scope.todos = [];
    todoStorage.put($scope.todos);
  }

  $scope.todoCompleted = function(todo) {
    todoStorage.put($scope.todos);
  }

});

