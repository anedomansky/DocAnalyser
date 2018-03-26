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

	/** Functions */
	/* convert array to Object */
	$scope.arrToObject = function(arr) {
		var rv = {};
		for (var i = 0,len=arr.length; i<len; ++i) {
			if (arr[i] !== undefined) {
				rv[arr[i]] = false;
			}
		}
		return rv;
	}
	/* Get the request parameters from the url and place them as keywords and topics */
	$scope.processRequestParameter = function() {
		var keywords = [];
		var topics = [];
		var keywordsObj = {};
		var topicsObj = {};
		// fill table with keywords:
		keywords = $stateParams.a.split(";");
		keywordsObj = $scope.arrToObject(keywords);
		KeywordsService.setKeywords(keywordsObj);
		// fill table with topics:
		topics = $stateParams.h.split(";");
		topicsObj = $scope.arrToObject(topics);
		TopicsService.setTopics(topicsObj);
		// preselect the top 4 keywords
		for (var i = 0; i<4; i++) {
			keywordsObj[keywords[i]] = true;
		}
	}
	/* End Functions */
	$scope.processRequestParameter();

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

	//user manually change the queryInput:
	$scope.change = function() {
	}
});

// Does not do anything at the moment
/* app.controller('SearchResultsCtrl', function($scope) {
	$scope.init = function() {
		setTimeout(function() {
			angular.element(document.querySelector('#customSearch')).click();
		}, 0);
	}
}); */



// Setup for the Custom Google Search

// Hook callback into the rendered Google Search
window.__gcse = {
	callback: googleCSELoaded
}; 
function googleCSELoaded() {
	// initial search after the page is loaded for the first time
	var searchText = $("#q").val();
	console.log(searchText);
	google.search.cse.element.render({gname:'searchOnlyCSE', div:'results', tag:'searchresults-only', attributes:{linkTarget:''}});
	var element = google.search.cse.element.getElement('searchOnlyCSE');
	element.execute(searchText);

	// triggers every following search
	$("#customSearch").click(function() {
		var searchText = $("#q").val();
		console.log(searchText);
		google.search.cse.element.render({gname:'searchOnlyCSE', div:'results', tag:'searchresults-only', attributes:{linkTarget:''}});
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
