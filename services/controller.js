/**
 * Mejora de carpeta todo... se trabaja con service
 * trabaja parecido a factories... la diferencia es que se trabaja como objeto... ya no retorna toDoService
 * se transforman todos los toDoService a this
 * https://codigofacilito.com/videos/curso_angularjs_factories
 */
angular.module("ToDoList", ["LocalStorageModule"] )
	.service('ToDoService', ['localStorageService', function(ls){
		this.key = "angular-todolist";
		if(ls.get(this.key)){
			this.activities = ls.get(this.key);

		}else{
			this.activities = [];
		}
		this.add = function(newActv){
			this.activities.push(newActv);
			this.updaLocalStorage();
		};
		this.updaLocalStorage = function(){
			ls.set(this.key,this.activities);
		};
		this.clean = function(){
			this.activities = [];
			this.updaLocalStorage();
			return this.getAll();
		};
		this.getAll = function(){
			return this.activities;
		};
		this.removeItem = function(item){
			this.activities = this.activities.filter(function(activity){
				return activity !== item;
			});
			this.updaLocalStorage();
			return this.getAll;
		};
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
