/**
 * LocalStorageModule : dependencia injectada desde angular-local-storage.js
 * localStorageService: lo mismo 
 * https://codigofacilito.com/videos/curso_angularjs_crear_un_to_do_list
 */
angular.module("ToDoList", ["LocalStorageModule"] )
	.controller('controlador_todo', ['$scope','localStorageService', function(s,l){
		if (l.get("angular-todolist")) {
			s.todo = l.get("angular-todolist");
		}else {
			s.todo = [];
		}
			
		s.$watchCollection('todo',function(newValue, oldValue){
			l.set("angular-todolist",s.todo);

		});
		s.addActv = function(){
			s.todo.push(s.newActv);
			s.newActv = {};
		};
	}])