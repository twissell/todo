describe('todoAppFilters', function(){

  // http://stackoverflow.com/questions/21094569/how-to-unit-test-a-filter-in-angularjs

  var filter;

  var todos = [
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
  ]

  beforeEach(module('todoAppFilters'));
  beforeEach(inject(function($filter){
    filter = $filter;
  }));

  describe('state filter', function(){
    
    it('should return all todos', function(){ 
      expect(filter('state')(todos, 'all').length).toBe(3);  
    });

    it('should return just active todos', function(){
      expect(filter('state')(todos, 'active').length).toBe(2);
    });

    it('should return just completed todos', function(){
      expect(filter('state')(todos, 'completed').length).toBe(1);
    });

  });

  describe('total filter', function(){
    
    it('should return the total count of all active todos', function(){
      expect(filter('total')(todos, 'active')).toBe(2);
    });

    it('should return the total count of all completed todos', function(){
      expect(filter('total')(todos, 'completed')).toBe(1);
    });

  });

});
