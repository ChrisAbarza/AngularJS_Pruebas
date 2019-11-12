/**
*  Trabajando con directiva autocomplete
*  
*
*	https://codigofacilito.com/videos/curso_angularjs_directivas_personalizadas_parte
*/
angular.module('customDirective', ["ngRoute"])
	.config(['$routeProvider',function(r) {
		r.when("/",{
			controller : "ReposController",
			templateUrl : "templates/home.html"
		})
		.when("/repo/:name",{
			controller : "RepoController",
			templateUrl : "templates/repo.html"
		})
		.otherwise("/");
	}]);

	