angular.module('customDirective') //sin el segundo parametro por que se está llamando solamente
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