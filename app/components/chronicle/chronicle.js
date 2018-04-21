angular.module('myApp').service('LocalStorageService', function ($window) {

    this.queries = []; // contains all saved queries after the page is loaded
    this.chronicleStatus = "undefined"; // indicates whether the chronicle function is activated or deactivated

    this.addQuery = function (query) {
        this.queries.push(query);
    };

    this.getQueries = function () {
        return this.queries;
    };

    this.setChronicleStatus = function (chronicleStatus) {
        this.chronicleStatus = chronicleStatus;
    };

    this.getChronicleStatus = function () {
        return this.chronicleStatus;
    };

    /* Create a new query object
    * NOTE: Prototype; few properties are still missing */
    this.newQuery = function (date, keywords, topics, url) {
        return {date: date, keywords: keywords, topics: topics, url: url};
    };

    /* Save the actual queries in localStorage */
    this.saveQueries = function () {
        $window.localStorage.setItem('queries', JSON.stringify(this.queries));
    };

    this.saveChronicleStatus = function () {
        $window.localStorage.setItem('chronicleStatus', this.chronicleStatus);
    };

    /* Load all saved queries and store them in this.queries */
    this.loadQueries = function () {
        if ($window.localStorage.getItem('queries')) { // queries must not be empty
            this.queries = JSON.parse($window.localStorage.getItem('queries')) || [];
        }
    };

    this.loadChronicleStatus = function () {
        if ($window.localStorage.getItem('chronicleStatus')) {
            this.chronicleStatus = $window.localStorage.getItem('chronicleStatus');
        }
    };

    /* Delete all saved queries */
    this.clearQueries = function () {
        var ret = true;
        $window.localStorage.removeItem('queries');
        if ($window.localStorage.getItem('queries')) {
            ret = false;
        }
        else {
            this.queries = [];
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

    $scope.queries = LocalStorageService.getQueries(); // array of queries
    $scope.chronicleStatus = true; // contains the status of the chronicle function
    $scope.searchText = "";
    $scope.statusTable = {
        true: 1,
        false: 0,
        0: false,
        1: true
        // TO DO: default case?
    };

    /** Functions */

    /* Load a query:
     * set loaded keywords, topics, top 4 keywords and perform a google search */
    $scope.loadQuery = function (query) {
        KeywordsService.setKeywords(query.keywords);
        TopicsService.setTopics(query.topics);
        var topKeywords = KeywordsService.selectedKeywordsAsArr();
        KeywordsService.setTopKeywords(topKeywords);
        $rootScope.$emit('queryLoaded', ""); // Roughly speaking for the google search
    };

    /* user clicked the Clear History button */
    $scope.clearHistory = function () {
        if (!LocalStorageService.clearQueries()) {
            window.alert("something went wrong!");
        }
        $scope.queries = LocalStorageService.getQueries(); // updates data binding; nothing happens if clear failed
    };

    /* user clicked the activate/deactivate History button */
    $scope.changeChronicleStatus = function () {
        $scope.chronicleStatus = !$scope.chronicleStatus;
        LocalStorageService.setChronicleStatus($scope.statusTable[$scope.chronicleStatus]);
        LocalStorageService.saveChronicleStatus();
    };

    /* initialization stuff */
    $scope.init = function () {
        var status = LocalStorageService.getChronicleStatus();
        if (status !== "undefined") {
            $scope.chronicleStatus = $scope.statusTable[status]; // load and set the chronicle status
        }
        else {
            $scope.chronicleStatus = true;
            console.log("first page visit. chronicle status is set to true.");
        }
    };

    /** End Functions */

    $scope.init();
});

//
app.filter('filterByDate', function () {
    return function (items, dateRange) {
        var filtered = [];
        var item = "";
        if(dateRange === "all") {
            return items;
        }
        else if(dateRange === "today") {
            var today = {from: new Date().setHours(0, 0, 0, 0), to: new Date().setHours(23, 59, 59, 999)};
            filtered = [];
            for (var i = 0; i < items.length; i++) {
                item = items[i];
                if(new Date(item.date) >= today.from && new Date(item.date) <= today.to) {
                    filtered.push(item);
                }
            }
            return filtered;

        }
        else if(dateRange === "week") {
            var weekMap = [6, 0, 1, 2, 3, 4, 5];
            var now = new Date();
            now.setHours(0, 0, 0, 0);
            var monday = new Date(now);
            monday.setDate(monday.getDate() - weekMap[monday.getDay()]);
            var sunday = new Date();
            sunday.setDate(sunday.getDate() - weekMap[sunday.getDay()] + 6);
            sunday.setHours(23, 59, 59, 999);
            filtered = [];
            for (var i = 0; i < items.length; i++) {
                item = items[i];
                if(new Date(item.date) >= monday && new Date(item.date) <= sunday) {
                    filtered.push(item);
                }
            }
            return filtered;
        }
        else if(dateRange === "month") {
            var dateMonth = new Date();
            var firstDayMonth = new Date(dateMonth.getFullYear(), dateMonth.getMonth() - 1, 1);     // 2018-03-01
            var lastDayMonth = new Date(dateMonth.getFullYear(), dateMonth.getMonth() + 1, 0);   // 2018-04-30
            // var lastDayMonth = new Date();
            filtered = [];
            for (var i = 0; i < items.length; i++) {
                item = items[i];
                if(new Date(item.date) >= firstDayMonth && new Date(item.date) <= lastDayMonth) {
                    filtered.push(item);
                }
            }
            return filtered;
        }
        else if(dateRange === "older") {
            var date = new Date();
            var older = {from: 0, to: new Date(date.getFullYear(), date.getMonth() - 1)};
            // var firstDay = new Date(date.getFullYear() - 1, date.getMonth(), 1); //2017-04-01
            // var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);  // 2018-04-30
            filtered = [];
            for (var i = 0; i < items.length; i++) {
                item = items[i];
                if(new Date(item.date) >= older.from && new Date(item.date) <= older.to) {
                    filtered.push(item);
                }
            }
            return filtered;
        }
        else {
            return items;
        }
    }
});