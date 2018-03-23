var app = angular.module('myApp',  ['ui.router']);

app.config(function($stateProvider) {

	$stateProvider
	.state('analyze', {
		templateUrl: 'analyze.html'
	})

	.state('chronicle', {
		templateUrl: 'chronicle.html'
	})
	.state('default', {
		url: '',
		templateUrl : 'analyze.html'
	});
});

app.service('TopicsService', function() {
	this.topics = {topic1: true, topic2: true};
	this.selectedTopics = function() {
		var selectedTopics = "";
		for (var topicName in this.topics) {
			if( this.topics[topicName] ) {
				selectedTopics += topicName + " ";
			}
		}
		return selectedTopics;
	}
});

app.service('KeywordsService', function() {
	this.keywords = {keyword1: true, keyword2: true};
	this.selectedKeywords = function() {
		var selectedKeywords = "";
		for (var keywordName in this.keywords) {
			if( this.keywords[keywordName] ) {
				selectedKeywords += keywordName + " ";
			}
		}
		return selectedKeywords;
	}
});


app.controller('SideMenuCtrl', function($scope) {

});

app.controller('DropdownMenuCtrl', ['$scope', '$state',
	function($scope, $state) {
	$scope.changeView = function(destination) {
		$state.go(destination);
	}
}]);

app.controller('KeywordsMenuCtrl', function($scope, KeywordsService) {
	$scope.keywords = KeywordsService.keywords;
	$scope.change = function() {
	}
});

app.controller('TopicsMenuCtrl', function($scope, TopicsService) {
	$scope.topics = TopicsService.topics;
	$scope.change = function() {
	}
});

app.controller('SearchInputCtrl', function($scope, TopicsService, KeywordsService) {
	$scope.topicsService = TopicsService;
	$scope.keywordsService = KeywordsService;
	$scope.queryInput = "";

	$scope.$watchGroup(['keywordsService.selectedKeywords()', 'topicsService.selectedTopics()'], function(newValues) {
		// newValues array contains the current values of the watch expressions
		$scope.queryInput = newValues[0] + newValues[1];
		$scope.queryInput = $scope.queryInput.slice(0, -1); // remove last whitespace
		setTimeout(function() {
			angular.element(document.querySelector('#customSearch')).click();
		}, 0);
	});

	//user manually change the queryInput:
	$scope.change = function() {
	}

	// Funktioniert nicht mehr, weil wahrscheinlich der StateProvider (ui-route) die URL immer automatisch
	// zurücksetzt.
	$scope.changeUrl = function() {
		//$event.stopPropagation();
		var arrVal = [];
		var val = "";
		var urlValue = "";
		arrVal = $scope.queryInput.split(" ");
		val = arrVal.join("%");
		urlValue ='?'+ 'q' +'='+ val;
		window.history.replaceState({state:1, rand: Math.random()}, '', urlValue);
		objQueryString.key=val;
		$scope.sendAjaxReq(objQueryString);
	}
	// Used to display data in webpage from ajax
	$scope.sendAjaxReq = function(objQueryString) {
		$.post('search.php', objQueryString, function(data) {
			// alert(data);
		})
	}
});

app.controller('SearchResultsCtrl', function($scope) {
	// TO DO: google suche beim laden der seite ausführen.
	// Funktioniert noch nicht, weil wahrscheinlich vor der Suche alle Komponenten fertig geladen sein müssen
	$scope.init = function() {
		setTimeout(function() {
			angular.element(document.querySelector('#customSearch')).click();
		}, 0);
	}
});
