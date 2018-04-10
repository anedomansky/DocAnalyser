angular.module('myApp').service('LocalStorageService', function ($window) {

    this.queries = []; // contains all saved queries after the page is loaded

    this.addQuery = function (query) {
        this.queries.push(query);
    };

    this.getQueries = function () {
        return this.queries;
    }

    /* Create a new query object
    * NOTE: Prototype; few properties are still missing */
    this.newQuery = function (date, keywords, topics, url) {
        return {date: date, keywords: keywords, topics: topics, url: url};
    };

    /* Save the actual queries in localStorage */
    this.saveQueries = function () {
        $window.localStorage.setItem('queries', JSON.stringify(this.queries));
    };

    /* Load all saved queries and store them in this.queries */
    this.loadQueries = function () {
        if ($window.localStorage.getItem('queries')) { // queries must not be empty
            this.queries = JSON.parse($window.localStorage.getItem('queries')) || [];
        }
    };

    /* Delete all saved queries */
    this.clearQueries = function () {
        var ret = true;
        $window.localStorage.removeItem('queries');
        this.queries = [];
        if ($window.localStorage.getItem('queries')) {
            ret = false;
        }
        return ret;
    };

    /*  detects whether localStorage is both supported and available
     * Credits to: https://developer.mozilla.org/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API */
    this.storageAvailable = function (type) {
        try {
            var storage = window[type],
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
                    // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage.length !== 0;
        }
    };


});

angular.module('myApp').controller('PastQueriesMenuCtrl', function ($scope, $rootScope, LocalStorageService,
                                                                    KeywordsService, TopicsService) {

    $scope.queries = LocalStorageService.getQueries();

    /** Functions */
    /* Load a query:
     * set loaded keywords, topics, top 4 keywords and perform a google search */
    $scope.loadQuery = function (query) {
        KeywordsService.setKeywords(query.keywords);
        TopicsService.setTopics(query.topics);
        var topKeywords = KeywordsService.selectedKeywordsAsArr();
        KeywordsService.setTopKeywords(topKeywords);
        $rootScope.$broadcast('queryLoaded', ""); // Roughly speaking for the google search
    };

    $scope.clearHistory = function () {
        if (LocalStorageService.clearQueries()) {
        }
        else {
            window.alert("something went wrong!");
        }
    };
    /** End Functions */
});