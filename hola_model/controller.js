var app = angular.module("MyFirstApp" , [] );

app.controller('FirstController', function($scope){
	$scope.nombre = "Arturo Vidal";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{comentario: "sapbeee",username:"XintiX"},
		{comentario: "wena wena chaval",username:"Sony"},
		{comentario: "Buy now",username:"btsda"},
		{comentario: "27/14",username:"phili"}
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push( $scope.nuevoComentario );
		$scope.nuevoComentario = {};
	}

});
