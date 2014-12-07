var express = require('express');
var router = express.Router();

var todos = [
  {'id': 1, 'name': 'first todo'},
  {'id': 2, 'name': 'second todo'}
]

/* GET home page. */
router.get('/', function(req, res) {
  res.json(null);
});

router.route('/todos')
  .get(function(req, res) {
    res.json(todos);
  })
  .post(function(req, res) {
    todos.push({
      'id':   req.body.id,
      'name': req.body.name
    })

    res.json('todo created');
  })
  .delete(function(req, res) {
    todos = [];
    res.json('todos deleted');
  })

router.route('/todos/:todo_id')
  .get(function(req, res) {
    for (var i = 0; i < todos.length; i++) {
      if (req.params.todo_id == todos[i].id) {
        res.json(todos[i]);
      }
    } 
  })
  .put(function(req, res) {
    for (var i = 0; i < todos.length; i++) {
      if (req.params.todo_id == todos[i].id) {
        todos[i].name = req.body.name;
        res.json('todo updated');
      }
    } 
  })
  .delete(function(req, res) {
    for (var i = 0; i < todos.length; i++) {
      if (req.params.todo_id == todos[i].id) {
        todos.splice(i, 1);
        res.json('todo deleted');
      }
    }
  })

module.exports = router;
