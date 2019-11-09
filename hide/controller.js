/**
 * Prueba completa de ng hide... revisar index
 * https://codigofacilito.com/videos/curso_angularjs_ng_hide_ng_show
 */

angular.module("app", [] )
	.controller('ControllerHTTP', ['$scope','$http', function(e,h){
		e.posts = [];
		e.loading = true;
		h.get('https://jsonplaceholder.typicode.com/posts')
			.then(function(response){
				e.posts = response.data;
				e.loading = false;

			})
			.catch(function(err){
				e.loading = false;
			});
	}]);