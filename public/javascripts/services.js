todoApp.factory('todoStorage', function() {
  return {
    get: function() {
      return JSON.parse(localStorage.getItem('todos') || '[]');
    },

    put: function(todos) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }
});

todoApp.factory('stateStorage', function() {
  return {
    get: function() {
      return localStorage.getItem('state') || 'all';
    }
  }

})
