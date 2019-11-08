/**
*
* https://codigofacilito.com/videos/curso_angularjs_filters
*/
angular.module('filter-app', [])
	.filter("filtrar_hola",function(){
		return function(texto){
			return String(texto).replace('hola', 'chau');
		}
	})
	.controller('filter-controller', ['$scope', function(s){
		s.mi_html = {};
		s.mi_html.title = "hola";
		s.mi_html.body = "mundo";
		s.costo = 2;
	}]);