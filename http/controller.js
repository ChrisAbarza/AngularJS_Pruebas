/**
 * Prueba completa de ajax utilizando get y post
 * https://codigofacilito.com/videos/curso_angularjs_ajax_con_http_1
 */

angular.module("app", [] )
	.controller('ControllerHTTP', ['$scope','$http', function(e,h){
		e.posts = [];
		e.newPost = {};
		h.get('https://jsonplaceholder.typicode.com/posts')
			.then(function(response){
				e.posts = response.data;
			})
			,function(err){

			};
		e.addPost = function(){
			h.post('https://jsonplaceholder.typicode.com/posts', {
				title : e.newPost.title,
				body : e.newPost.body,
				userId : 1
			} )
				.then(function(response){
					e.posts.push(response.data);
					e.newPost = {};

				})
				,function(error){
					console.log(error);
				};
		}	
	}]);