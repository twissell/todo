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
