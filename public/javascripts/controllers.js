var todoAppControllers = angular.module('todoAppControllers', []);

todoAppControllers.controller('TodoListCtrl', 
    function($scope, todoStorage, todoStorage, stateStorage) {

  $scope.states = ['all', 'active', 'completed'];
  $scope.priorities = ['high', 'medium', 'low'];
  //localStorage.removeItem('todos');
  //localStorage.removeItem('stateOption');
  $scope.todos = todoStorage.get();
  $scope.state = stateStorage.get(); 
  // state
  $scope.stateChange = function(state) {
    localStorage.setItem('state', state);
  }

  // priority
  $scope.priorityChange = function(todo) {  
    $scope.todos[$scope.todos.indexOf(todo)] = todo;
    todoStorage.put($scope.todos);
  }

  // todos
  $scope.addTodo = function() {
    $scope.todos.push({
      'content': $scope.newTodo.trim(),
      'completed': false,
      'priority': 'medium'
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

