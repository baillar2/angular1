angular.module('moduleOne',[])

angular.module('moduleOne')
	.controller('controllerOne',['$scope', function($scope){
		console.log('it works')
		$scope.popUp = function(){
			$scope.show = true
		}

		$scope.popDown = function(){
			$scope.show = false
		}



	}])