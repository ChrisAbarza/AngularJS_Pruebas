/**
 * Mejora de carpeta todo... se trabaja con factories
 * html llama a .controller y .controller a .factory... se trabaja como funcion
 * https://codigofacilito.com/videos/curso_angularjs_factories
 */
angular.module("ToDoList", ["LocalStorageModule"] )
	.factory('ToDoService', ['localStorageService', function(ls){
		var toDoService = {};
		toDoService.key = "angular-todolist";
		if(ls.get(toDoService.key)){
			toDoService.activities = ls.get(toDoService.key);

		}else{
			toDoService.activities = [];
		}
		toDoService.add = function(newActv){
			toDoService.activities.push(newActv);
			toDoService.updaLocalStorage();
		};
		toDoService.updaLocalStorage = function(){
			ls.set(toDoService.key,toDoService.activities);
		};
		toDoService.clean = function(){
			toDoService.activities = [];
			toDoService.updaLocalStorage();
			return toDoService.getAll();
		};
		toDoService.getAll = function(){
			return toDoService.activities;
		};
		toDoService.removeItem = function(item){
			toDoService.activities = toDoService.activities.filter(function(activity){
				return activity !== item;
			});
			toDoService.updaLocalStorage();
			return toDoService.getAll;
		};

		return toDoService;
	}])
	.controller('controlador_todo', ['$scope','ToDoService', function(s,tds){
		s.todo = tds.getAll();
		s.newActv = {};
		s.addActv = function(){
			tds.add(s.newActv);
			s.newActv = {};
		}
		s.removeActv = function(item){
			s.todo = tds.removeItem(item);
		}
		s.clean = function(){
			s.todo = tds.clean();
		}
	}])
