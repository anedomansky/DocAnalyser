/**
 * @ngdoc service
 * @name docanalyser.LocalStorageService
 * @description This service provides a custom interface to the Webstorage API.
 * Data can be stored persistently in the user's local memory.
 * The standard way to store a object is:
 * addObject(myObject); or setObject(object);
 * and then
 * saveObject(object);
 * The standard way to load a object is:
 * loadObject();
 * and then
 * getObject();
 * @property {Array} queries:Array Global Array that contains the stored queries.
 * @property {String} chronicleStatus:String Global String that indicates whether the user wants to save queries.
 * @property {Object} cooccs:Object Global Object that contains the stored cooccs hash.
 */
angular.module('docanalyser').service('LocalStorageService', function ($window) {

    this.queries = []; // contains all saved queries after the page is loaded
    this.chronicleStatus = "undefined"; // indicates whether the chronicle function is activated or deactivated
    this.cooccs = {}; // co-occurences

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

    this.setCooccs = function (cooccs) {
        this.cooccs = cooccs;
    };

    this.getCooccs = function () {
        return this.cooccs || {};
    };

    /* Create a new query object */
    this.newQuery = function (date, keywords, topics, title) {
        return {date: date, keywords: keywords, topics: topics, title: title};
    };

    /* Save the actual queries in localStorage */
    this.saveQueries = function () {
        $window.localStorage.setItem('queries', JSON.stringify(this.queries));
    };

    this.saveChronicleStatus = function () {
        $window.localStorage.setItem('chronicleStatus', this.chronicleStatus);
    };

    this.saveCooccs = function () {
        $window.localStorage.setItem('cooccs', JSON.stringify(this.cooccs));
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

    this.loadCooccs = function () {
        if ($window.localStorage.getItem('cooccs')) { // queries must not be empty
            this.cooccs = JSON.parse($window.localStorage.getItem('cooccs')) || {};
        }
    };

    /**
     * @ngdoc
     * @name docanalyser.LocalStorageService#clearQueries
     * @methodOf docanalyser.LocalStorageService
     *
     * @description remove all Query Items stored in the local Storage.
     * @example
     * ret = LocalStorageService.clearQueries();
     * @returns {boolean} indicates whether the deletion was successful
     */
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

    /**
     * @ngdoc
     * @name docanalyser.LocalStorageService#clearQueries
     * @methodOf docanalyser.LocalStorageService
     *
     * @description detects whether localStorage is both supported and available
     * Credits to: https://developer.mozilla.org/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
     * @example
     * ret = LocalStorageService.storageAvailable("localStorage");
     * @param {String} type specifies which storage type should be checked
     * @returns {boolean} indicates whether the storage is available
     */
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

/**
 * @ngdoc controller
 * @name docanalyser.controller:PastQueriesMenuCtrl
 * @description Controller for the management of the saved searches.
 * @property {boolean} chronicleStatus:boolean Specifies whether the user wants to save queries or not.
 * @property {Array} chronicleStatus:Array Contains the stored queries.
 * @property {String} searchText:String Contains the filter input.
 */
angular.module('docanalyser').controller('PastQueriesMenuCtrl', function ($scope, $rootScope, LocalStorageService,
                                                                    KeywordsService, TopicsService, FooterService) {

    $scope.queries = LocalStorageService.getQueries(); // array of queries
    $scope.chronicleStatus = true; // contains the status of the chronicle function
    $scope.searchText = "";
    $scope.statusTable = {
        true: 1,
        false: 0,
        0: false,
        1: true
    };

    /** Functions */

    /**
     * @ngdoc function
     * @name docanalyser.controller:PastQueriesMenuCtrl#loadQuery
     * @methodOf docanalyser.controller:PastQueriesMenuCtrl
     *
     * @description  Load a query:
     * set loaded keywords, topics, top 4 keywords and perform a google search
     * @example
     * loadQuery(mySelectedQuery);
     * @param {Object} query Query to be loaded
     */
    $scope.loadQuery = function (query) {
        KeywordsService.setKeywords(query.keywords);
        TopicsService.setTopics(query.topics);
        var topKeywords = KeywordsService.selectedKeywordsAsArr();
        KeywordsService.setTopKeywords(topKeywords);
        $rootScope.$emit('queryLoaded', ""); // Roughly speaking for the google search
    };

    /**
     * @ngdoc function
     * @name docanalyser.controller:PastQueriesMenuCtrl#clearHistory
     * @methodOf docanalyser.controller:PastQueriesMenuCtrl
     *
     * @description user clicked the Clear History button. All stored queries are deleted.
     * @example
     * clearHistory();
     * @returns {boolean} true if all queries could be deleted
     */
    $scope.clearHistory = function () {
        if (!LocalStorageService.clearQueries()) {
            FooterService.showWarning('Something went wrong. Your History can not be deleted.');
        }
        $scope.queries = LocalStorageService.getQueries(); // updates data binding; nothing happens if clear failed
    };

    /* user clicked the activate/deactivate History button */
    $scope.changeChronicleStatus = function () {
        $scope.chronicleStatus = !$scope.chronicleStatus;
        LocalStorageService.setChronicleStatus($scope.statusTable[$scope.chronicleStatus]);
        LocalStorageService.saveChronicleStatus();
    };

    /**
     * @ngdoc function
     * @name docanalyser.controller:PastQueriesMenuCtrl#init
     * @methodOf docanalyser.controller:PastQueriesMenuCtrl
     * @description Initialization stuff. In case of page reload, stored queries are reloaded again.
     * The chronicle status is loaded or set to true at the first page view.
     * @example
     * init();
     */
    $scope.init = function () {
        // in case of page reload; reload the stored queries again:
        if ($scope.queries != null && $scope.queries.length != null && $scope.queries.length < 1) {
            LocalStorageService.loadQueries();
            $scope.queries = LocalStorageService.getQueries();
        }
        LocalStorageService.loadChronicleStatus();
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

/**
 * @ngdoc filter
 * @name docanalyser.filter:filterByDate
 * @function
 * @description custom filter to filter queries by date.
 * The filter options are filtering by day, week, month or older than one month
 * @returns {Object} filtered items
 */
app.filter('filterByDate', function () {
    return function (items, dateRange) {
        var filtered = [];
        var item = "";
        if(dateRange === "all") {
            return items;
        }
        else if(dateRange === "today") {
            // e.g. 2018-04-28 0:00:00:000 am - 2018-04-28 11:59:59:999 pm
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
            // e.g. 2018-03-01
            var firstDayMonth = new Date(dateMonth.getFullYear(), dateMonth.getMonth() - 1, 1);
            // e.g. 2018-04-30
            var lastDayMonth = new Date(dateMonth.getFullYear(), dateMonth.getMonth() + 1, 0);
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