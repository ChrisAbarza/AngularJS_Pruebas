angular.module("FinalApp",["lumx","ngRoute"])
	.config(['$routeProvider',function(r) {
		r.
			when("/",{
				controller : "MainController",
				templateUrl : "templates/home.html"
			})
		
	}])