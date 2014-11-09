describe('TodoListCtrl', function(){

  beforEach(module('todoApp'));
  
  it('should create todo models with 2 todos', inject(function($controller) {
    var scope = {},
        ctrl = $controller('TodoListCtrl', {$scope:scope});

    expect(scope.todos.length).toBe(2);
  
  }));

}); 