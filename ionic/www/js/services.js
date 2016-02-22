angular.module('starter.services', [])

.factory('Todo', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var todo = [{
    id: 0,
    name: 'Ben Sparrow',
    task: 'Do it, do it',
  }, {
    id: 1,
    name: 'Jack Brown',
    task: 'Good vibes',
  }, {
    id: 2,
    name: 'Applesauce Smith',
    task: 'Positive Energy',
  }, {
    id: 3,
    name: 'Bernie Snyder',
    task: 'Read cool stuff',
  }, {
    id: 4,
    name: 'FRED',
    task: 'Apply for jobs in England',
  }];

  return {
    all: function() {
      return todo;
    },
    get: function(todoId) {
      for (var i = 0; i < todo.length; i++) {
        if (todo[i].id === parseInt(todoId)) {
          return todo[i];
        }
      }
      return null;
    }
  };
});
