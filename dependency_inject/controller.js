
/**
 * Especial para minificar revisar diferencias con hola_model/controller.js o
 * https://codigofacilito.com/videos/curso_angularjs_dependency_injection
 */
var app = angular.module("MyFirstApp" , [] );

app.controller('FirstController', ['$scope', function(e){
	e.nombre = "Arturo Vidal";
	e.nuevoComentario = {};
	e.comentarios = [
		{comentario: "sapbeee",username:"XintiX"},
		{comentario: "wena wena chaval",username:"Sony"},
		{comentario: "Buy now",username:"btsda"},
		{comentario: "27/14",username:"phili"}
	];
	e.agregarComentario = function(){
		e.comentarios.push( e.nuevoComentario );
		e.nuevoComentario = {};
	}
}])
