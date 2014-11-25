var todoAppControllers = angular.module('todoAppControllers', []);

todoAppControllers.controller('TodoListCtrl', function($scope) {

  $scope.stateOptions = ['all', 'active', 'completed'];

  //localStorage.removeItem('todos');
  $scope.todos = JSON.parse(localStorage.getItem('todos') || '[]');

  $scope.addTodo = function() {
    $scope.todos.push({
      'content': $scope.newTodo.trim(),
      'completed': false
      }
    ); 

    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };

  $scope.removeTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    $scope.todos.splice(todoIndex, 1);
   
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };

  $scope.removeCompleted = function() {
    filtered = []; 
    for(var i = 0; i < $scope.todos.length; i++) {
      if($scope.todos[i].completed != true) {
        filtered.push($scope.todos[i])
      }
    }
    $scope.todos = filtered;
   
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };

  $scope.todoCompleted = function(todo) {
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  }

});

