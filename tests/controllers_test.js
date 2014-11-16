describe('TodoListCtrl', function(){

  var scope, ctrl;
  
  beforeEach(module('todoApp'));
  
  beforeEach(inject(function($rootScope, $controller){ 
     
    scope = $rootScope.$new();
    ctrl = $controller('TodoListCtrl', {$scope:scope});

  }));

  it('should create todo models with 3 todos', function(){
    
    expect(scope.todos.length).toBe(3);
  
  });

  it('should add a new todo to todos', function(){
  
    scope.newTodo = 'new todo';
    scope.addTodo();

    expect(scope.todos.length).toBe(4);

  });

  it('should remove a todo from todos', function(){
  
    scope.removeTodo(scope.todos[0]);
    expect(scope.todos.length).toBe(2);

    scope.removeTodo(scope.todos[0]);
    expect(scope.todos.length).toBe(1);
    
    scope.removeTodo(scope.todos[0]);
    expect(scope.todos.length).toBe(0);

  });

  it('should remove all completed todos', function(){
  
    scope.removeCompleted();
    expect(scope.todos.length).toBe(2);

  });

}); 
