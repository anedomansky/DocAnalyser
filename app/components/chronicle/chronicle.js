angular.module('myApp').service('LocalStorageService', function($window) {

    this.queries = []; // contains all saved queries after the page is loaded

    this.addQuery = function(query) {
        this.queries.push(query);
    };

    this.getQueries = function() {
        return this.queries;
    }

    /* Create a new query object
    * NOTE: Prototype; few properties are still missing */
    this.newQuery = function(date,keywords,topics, url) {
        return {date:date, keywords:keywords, topics:topics, url:url};
    };

    /* Save the actual queries in localStorage */
    this.saveQueries = function() {
        $window.localStorage.setItem('queries', JSON.stringify(this.queries));
    };

    /* Load all saved queries and store them in this.queries */
    this.loadQueries = function() {
        if ($window.localStorage.getItem('queries')) { // queries must not be empty
            this.queries = JSON.parse($window.localStorage.getItem('queries')) || [];
        }
    };

    /* Delete all saved queries */
    this.clearQueries = function() {
        var ret = true;
        $window.localStorage.removeItem('queries');
        this.queries = [];
        if ($window.localStorage.getItem('queries')) {
            ret = false;
        }
        return ret;
    };


});

angular.module('myApp').controller('PastQueriesMenuCtrl', function($scope, LocalStorageService,
                                                                   KeywordsService, TopicsService, ConverterService) {

    $scope.queries = LocalStorageService.getQueries();

    /** Functions */
    /* Load a query:
     * set loaded keywords, topics, top 4 keywords and perform a google search */
    $scope.loadQuery = function(query) {
        KeywordsService.setKeywords(query.keywords);
        TopicsService.setTopics(query.topics);
    };

    $scope.clearHistory = function() {
        if (LocalStorageService.clearQueries()) {
        }
        else {
            window.alert("something went wrong!");
        }
    };
    /** End Functions */
});