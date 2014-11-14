var todoApp = angular.module('TodoApp', []);

todoApp.filter('state', function() {
  return function(items, stateOption){
    // returns all items
    if(stateOption == "all") {
      return items;
    }

    filtered = [];
    for (var i = 0; i < items.length; i++) {
      
      // just all active items
      if(stateOption == "active") {
        if(items[i].completed == false) {
          filtered.push(items[i]);
        }
      }
      else {
        // just all completed items
        if(items[i].completed == true) {
          filtered.push(items[i]);
        }
      }

    }
    return filtered;
  };

});

todoApp.filter('total', function() {
  return function(todos, state) {
    // count for active todos 
    if(state == 'active') { 
      count = 0;
      for(var i = 0; i < todos.length; i++) {
        if(todos[i].completed == false) {
          count += 1;
        } 
      }
      return count;
    }
    // count for completed todos
    if(state == 'completed') {
      count = 0;
      for(var i = 0; i < todos.length; i++) {
        if(todos[i].completed == true) {
          count += 1;
        }
      }
      return count;
    }
  }
});

todoApp.controller('TodoListCtrl', function($scope) {

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

