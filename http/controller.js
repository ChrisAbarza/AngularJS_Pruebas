
angular.module("app", [] )
	.controller('ControllerHTTP', ['$scope','$http', function(e,h){
		e.posts = [];
		h.get('https://jsonplaceholder.typicode.com/posts')
			.then(function(response){
				e.posts = response.data;
			})
			,function(err){

			};
	}]);