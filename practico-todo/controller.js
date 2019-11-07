/**
 * LocalStorageModule : dependencia injectada desde angular-local-storage.js
 * localStorageService: lo mismo 
 */
angular.module("ToDoList", ["LocalStorageModule"] )
	.controller('controlador_todo', ['$scope','localStorageService', function(s,l){
		if (l.get("angular-todolist")) {
			s.todo = l.get("angular-todolist");
		}else {
			s.todo = [];
		}
		

		s.addActv = function(){
			s.todo.push(s.newActv);
			s.newActv = {};
			l.set("angular-todolist",s.todo);
		};

		s.cleanActv = function(){
			s.todo = [];
			l.set("angular-todolist",s.todo);

		};
	}])