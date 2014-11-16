describe('TodoListCtrl', function(){

  var scope, ctrl;
  
  beforeEach(module('TodoApp'));
  
  beforeEach(inject(function($rootScope, $controller){ 
    
    scope = $rootScope.$new();
    ctrl = $controller('TodoListCtrl', {$scope:scope});

  }));

  it('should create todo models with 3 todos', function(){
    
    expect(scope.todos.length).toBe(3);
  
  });

}); 
