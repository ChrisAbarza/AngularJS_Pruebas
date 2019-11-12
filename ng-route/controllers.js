angular.module('customDirective') //sin el segundo parametro por que se está llamando solamente
	.controller('ReposController', ['$scope','$http', function(s,h){
			s.repos = [];
			h.get("https://api.github.com/users/ChrisAbarza/repos")
				.then(function(data){
					var datos = data.data;
					s.posts = datos;
					for(var i = 0; i <= datos.length - 1; i++){
						var repo = datos[i];
						s.repos.push(repo.name);
					}
				})
				.catch(function(err){
						alert(err.status);
						e.newPost = {};
				});

			s.optionSelected = function(data){
				s.$apply(function(){
					s.main_repo = data;
				});
			}
			
		}])	
	.controller('RepoController', ['$scope','$http','$routeParams', function(s,h,rp){
		s.repo = {};
		h.get("https://api.github.com/repos/ChrisAbarza/"+rp.name)
			.then(function(data){
				s.repo = data.data;
			})
			.catch(function(err){
					alert(err.status);
					e.newPost = {};
			});
		
	}])