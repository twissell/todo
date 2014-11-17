var todoAppFilters = angular.module('todoAppFilters', []);

todoAppFilters.filter('state', function() {
  return function(items, stateOption){
    // returns all items
    if(stateOption == "all") {
      return items;
    }

    filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];  
      // just all active items
      if(stateOption == "active") {
        if(item.completed == false) {
          filtered.push(item);
        }
      }
      else {
        // just all completed items
        if(item.completed == true) {
          filtered.push(item);
        }
      }

    }
    return filtered;
  };

});

todoAppFilters.filter('total', function() {
  return function(todos, state) {
    
    var count = 0;
    for(var i = 0; i < todos.length; i++) {
      
      var todo = todos[i];
      
      if(state == 'active'){
        if(todo.completed == false){
          count += 1;
        }
      }
      else if(state == 'completed'){
        if(todo.completed == true){
          count += 1;
        }
      }

    }
    
    return count;
  }
});
