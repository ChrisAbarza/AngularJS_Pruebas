/**
* child-app Module
*https://codigofacilito.com/videos/curso_angularjs_rootscope_y_child_controllers
* Description
*/
angular.module('child-app', [])
	.run(function($rootScope){
		$rootScope.nombre = "Buena Buena";
	})
	.controller('FirstController', ['$scope', function(s){
		s.nombre = "Mala Mala";
		setTimeout(function(){
			s.$apply(function(){
				s.nombre=":3";
			});
		},1000);
	}])
	.controller('ChildController', ['$scope', function(s){
		
	}])