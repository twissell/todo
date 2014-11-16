var todoAppControllers = angular.module('todoAppControllers', []);

todoAppControllers.controller('TodoListCtrl', function($scope) {

  $scope.stateOptions = ['all', 'active', 'completed'];

  $scope.todos = [
    {
      'content': 'first todo',
      'completed': false
    },
    {
      'content': 'second todo',
      'completed': true
    },
    {
      'content': 'third todo',
      'completed': false
    }
  ];

  $scope.addTodo = function() {
    var newTodo = {
      'content': $scope.newTodo.trim(),
      'completed': false
    }
   $scope.todos.push(newTodo);
  };

  $scope.removeTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    $scope.todos.splice(todoIndex, 1);
  };

  $scope.removeCompleted = function() {
    filtered = []; 
    for(var i = 0; i < $scope.todos.length; i++) {
      if($scope.todos[i].completed != true) {
        filtered.push($scope.todos[i])
      }
    }
    $scope.todos = filtered;
  };

});

