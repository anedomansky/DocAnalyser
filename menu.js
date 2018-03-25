var app = angular.module('myApp',  ['ui.router']);

app.config(['$stateProvider', function($stateProvider) {

	$stateProvider
	.state('analyze', {
		templateUrl: 'analyze.html'
	})

	.state('chronicle', {
		templateUrl: 'chronicle.html'
	})
	.state('default', {
		url: '?query&a&h',
		controller: 'RequestCtrl',
		templateUrl : 'analyze.html'
	});
}]);

app.controller('RequestCtrl', ['$scope', '$state', '$stateParams', 'KeywordsService', 'TopicsService',
	function($scope, $state, $stateParams, KeywordsService, TopicsService) {
	$scope.toObject = function(arr) {
		var rv = {};
		for (var i = 0,len=arr.length; i<len; ++i)
			if (arr[i] !== undefined) rv[arr[i]] = false;
		return rv;
	}
	var keywords = [];
	var topics = [];
	var keywordsObj = {};
	var topicsObj = {};
	//fill table with keywords:
	keywords = $stateParams.query.split(";");
	keywordsObj = $scope.toObject(keywords);
	KeywordsService.setKeywords(keywordsObj);
	//fill table with topics:
	topics = $stateParams.a.split(";");
	topicsObj = $scope.toObject(topics);
	TopicsService.setTopics(topicsObj);
	

}]);

app.service('TopicsService', function() {
	this.topics = {};
	this.setTopics = function(topics) {
		this.topics = topics;
	}
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
	this.keywords = {};
	this.setKeywords = function(keywords) {
		this.keywords = keywords;
	}
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

app.service('PastQueriesService', function() {
	this.queries = {query1: true, query2: false};
	this.selectedQuery = function() {
		var selectedQuery = "";
		for (var queryName in this.queries) {
			if( this.queries[queryName] ) {
				selectedQuery += queryName + " ";
			}
		}
		return selectedQuery;
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

app.controller('PastQueriesMenuCtrl', function($scope, PastQueriesService) {
	$scope.pastQueries = PastQueriesService.queries;
	$scope.change = function() {
	}
});

app.controller('SearchInputCtrl', function($scope, TopicsService, KeywordsService, PastQueriesService) {
	$scope.topicsService = TopicsService;
	$scope.keywordsService = KeywordsService;
	$scope.pastQueriesService = PastQueriesService;
	$scope.queryInput = "";

	$scope.$watchGroup(['keywordsService.selectedKeywords()', 'topicsService.selectedTopics()'], function(newValues) {
		// newValues array contains the current values of the watch expressions
		$scope.queryInput = newValues[0] + newValues[1];
		$scope.queryInput = $scope.queryInput.slice(0, -1); // remove last whitespace
		setTimeout(function() {
			angular.element(document.querySelector('#customSearch')).click();
		}, 0);
	});


	//
	// TODO: if/else for different states + queryInput
	//


	//user manually change the queryInput:
	$scope.change = function() {
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




//Setup for the Custom Google Search

//Hook a callback into the rendered Google Search
window.__gcse = {
		callback: googleCSELoaded
}; 
function googleCSELoaded() {
	// The hook 
	$("#customSearch").click(function() {
		var searchText = $("#q").val();
		console.log(searchText);
		var element = google.search.cse.element.getElement('searchOnlyCSE');
		element.execute(searchText);
	})
}

//Custom Google Search
(function() {
	var cx = '003813809171160788124:z54qpilp6j4';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
})();


