(function(){
	angular.module('tabDemo',[])

	.controller('tabCtrl', ['$scope', '$compile', '$element', function ($scope, $compile, $element) {
		/** holds tabs, we will perform repeat on this **/
		$scope.tabs = [{
			id:1,
			content:'<button>test</button>'
		}]
		
		$scope.counter = 1;
		/** Function to add a new tab **/
		$scope.addTab = function(){
			$scope.counter++;
			$scope.tabs.push({id:$scope.counter,content:'Any Content'});
			$scope.selectedTab = $scope.tabs.length - 1; //set the newly added tab active. 
			$element.append("<button>test</button>");
			$compile($element.contents())($scope);
		}
		
		/** Function to delete a tab **/
		$scope.deleteTab = function(index){
			$scope.tabs.splice(index,1); //remove the object from the array based on index
		}
		
		$scope.selectedTab = 0; //set selected tab to the 1st by default.
		
		/** Function to set selectedTab **/
		$scope.selectTab = function(index){
			$scope.selectedTab = index;
		}
	}])
    
})()