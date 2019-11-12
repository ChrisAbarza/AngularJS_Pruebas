/**
*  Module
*
*	https://codigofacilito.com/videos/curso_angularjs_directivas_personalizadas_parte
*/
angular.module('customDirective', [])
	.directive("myAutocomplete",function(){
		function link(scope,element,attrs){
			$(element).autocomplete({
				source : scope.$eval(attrs.myAutocomplete),
				select : function(ev,ui){
					ev.preventDefault();
					if (ui.item) {
						scope.optionSelected(ui.item.value);
					}
				},
				focus : function(ev,ui){
					ev.preventDefault();
					$(this).val(ui.item.label);
				}
			});
		};
		return {
			link : link
		};
	})
	.directive('backImg', function(){
		return function(scope,element,attrs){
			attrs.$observe('backImg', function(value){
				element.css({
					"background" : "url("+value+")",
					"background-size" : "cover",
					"background-position" : "center"
				});
			})
		}
	})
	.controller('controlador', ['$scope','$http', function(s,h){
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