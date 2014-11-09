var todoApp = angular.module('TodoApp', []);

todoApp.controller('TodoListCtrl', function($scope) {
  $scope.todos = [
    {'content': 'first todo'},
    {'content': 'second todo'}
  ];

  $scope.addTodo = function() {
    var newTodo = {
      'content': $scope.newTodo.trim()
    }

   $scope.todos.push(newTodo);

  };

});
