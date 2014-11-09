var todoApp = angular.module('TodoApp', []);

todoApp.controller('TodoListCtrl', function($scope) {
  
  $scope.todos = [
    {
      'content': 'first todo',
      'completed': false
    },
    {
      'content': 'second todo',
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

});
