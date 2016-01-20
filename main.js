// TOP LEVEL COMPONENT - Module

angular.module('moduleOne', []);

// REGISTER A CONTROLLER TO OUR MODULE

angular
	.module('moduleOne')
		.controller('controllerOne', ['$scope', function($scope){
		
		$scope.click = function(){
			console.log("you clicked a button")
			$scope.greeting = "guess it worked"
			$scope.show = true
		}
		$scope.excited ='!'
		
		$scope.confirmHide = function(){
			var response = confirm ("Would you like to continue?")
			if (response === true){
				$scope.hide = true
			}
			else {
				event.preventDefault()
			}
		}





		}])