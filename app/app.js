var app = angular.module('myApp', ['ui.router', 'ngRoute', 'ngCookies', 'pascalprecht.translate']);

app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('analyze', {
            url: '/search/:searchTerms',
            templateUrl: './app/components/analyze/analyze.html',
        })

        .state('chronicle', {
            url: '/chronicle',
            templateUrl: './app/components/chronicle/chronicle.html'
        })

        .state('init', {
            url: '?a&h&title',
            controller: 'RequestCtrl',
        })

        .state('emptyKeywordsTopics', {
            url: '?query',
            views: {
                '': {
                    templateUrl: './app/components/errors/noData.html'
                },
                'emptyKeywordsTopics': {
                    templateUrl: './app/components/errors/emptyKeywordsTopics.html'
                }
            }

        })

        .state('timeout', {
            url: '?query=&error=network timeout',
            views: {
                '': {
                    templateUrl: './app/components/errors/noData.html'
                },
                'timeout': {
                    templateUrl: './app/components/errors/timeout.html'
                }
            }
        })

        .state('exception', {
            url: '?query=&error=exception occurred',
            views: {
                '': {
                    templateUrl: './app/components/errors/noData.html'
                },
                'exception': {
                    templateUrl: './app/components/errors/exception.html'
                }
            }
        })

        .state('dataProtection', {
            url: '/Data-protection',
            views: {
                'dataProtection': {
                    templateUrl: './app/components/help/dataProtection.html'
                }
            }
        })

        .state('error', {
            templateUrl: '{link}'
        });

}]);

// translations English('en') - German('de')
app.config(function($translateProvider) {
    $translateProvider.translations('en', {
        // search.html
        SEARCH_BUTTON: 'Search',
        SELECT_DE: 'German',
        SELECT_EN: 'English',
        VIEWS: 'Change View',
        ANALYZE_VIEW: 'Analyze',
        CHRONICLE_VIEW: 'Chronicle',
        CHAIR_COM_NETWORK: 'Chair of Communication Networks',
        COOKIE_WARNING: 'This website uses cookies. ' +
        'By continuing to use this website you are giving consent to cookies being used.',
        LEARN_MORE: 'Learn more',

        // analyze.html
        KEYWORDS_HEADLINE: 'Keywords',
        TOPICS_HEADLINE: 'Source Topics',

        // chronicle.html
        PASTQUERIES_HEADLINE: 'Past Queries',
        DATESELECT_DEFAULT: 'select ...',
        DATESELECT_ALL: 'all',
        DATESELECT_TODAY: 'today',
        DATESELECT_WEEK: 'this week',
        DATESELECT_MONTH: 'this month',
        DATESELECT_OLDER: 'older than a month',
        SEARCH_PLACEHOLDER: 'Search History',
        HISTORY_OFF: 'Deactivate History',
        HISTORY_ON: 'Activate History',
        CLEARHISTORY_BUTTON: 'Clear History',

        // help.html
        DOCANALYSER_HELP: 'The keywords and phrases you see on the left were found to be significant for the document(s) you provided. ' +
        'You may now compose queries by selecting and deselecting these terms which are then sent to Google. ' +
        'Furthermore, you can modify the current query manually. Relevant commercial advertisements to the ' +
        'current query are shown besides search results.',

        // helpKeywords.html
        KEYWORDS_HELP: 'These keywords represent authorities. An authority is a page that is pointed to by lots of good hubs.',

        // helpTopics.html
        TOPICS_HELP: 'These topics represent hubs. Hubs are directories that point to authoritative pages.',

        // helpPastQueries.html
        PASTQUERIES_HELP: 'Here you can view your saved queries and review their results. ' +
        'Use the filtering by date or enter a search term to find the desired query. ' +
        'You can also disable the history function, then nothing will be saved on the next page views. ' +
        'Previous queries must be manually deleted.',

        // emptyKeywordsTopics.html
        EMPTY_KEYWORDS_TOPICS_HEADLINE: 'No keywords or topics could be found!',

        // exception.html
        EXCEPTION_HEADLINE: 'There was an error!',

        // timeout.html
        TIMEOUT_HEADLINE: 'Connection timeout!',

        // noData.html
        NO_KEYWORDS: 'No keywords found...',
        NO_TOPICS: 'No topics found...',

        ERROR_HEADLINE: 'Please analyse another document or try again.',

        // dataProtection.html
        DATA_PROT_HEADLINE: 'Declaration Of Data Protection',
        DATA_PROT: 'Data Protection',
        DATA_PROT_P_1: 'The owners of these websites are very serious about ' +
        'protecting your personal data. We handle personal data ' +
        'in accordance to the data protection regulations.',
        DATA_PROT_P_2: 'The Usage of our websites is usually possible without your personal data. ' +
        'If we do need your personal data(e.g. your manually typed search input)' +
        ', the process of data collection will be voluntarily. ' +
        'The collected data will not be made accessible to others without your consent.',
        DATA_PROT_P_3: 'We want to point out that the transmission of data(e.g. communication via email) ' +
        'can lead to a security breach. ' +
        'Transmission without the risk of security breaches is not possible.',
        DATA_PROT_COOKIES_P_1: 'Our websites use cookies. ' +
        'These cookies are completely harmless. Cookies are a way to improve our websites. ' +
        'Cookies are small text files which are stored on your computer.',
        DATA_PROT_COOKIES_P_2: 'We use cookies in order to support the standard browser functionality, ' +
        'the reloading of the current website.',
        DATA_PROT_COOKIES_P_3: 'You can change your browser settings to enable a notification about new cookies. ' +
        'That way you can accept or decline every cookie before it is stored on your computer. ' +
        'Furthermore you can modify the browser settings in order to automatically delete cookies when closing the browser.'
    })
    .translations('de', {
        // search.html
        SEARCH_BUTTON: 'Suchen',
        SELECT_DE: 'Deutsch',
        SELECT_EN: 'Englisch',
        VIEWS: 'Ansicht wechseln',
        ANALYZE_VIEW: 'Analysieren',
        CHRONICLE_VIEW: 'Chronik',
        CHAIR_COM_NETWORK: 'Lehrstuhl für Kommunikationsnetze',
        COOKIE_WARNING: 'Diese Internetseite nutzt Cookies. ' +
        'Bei Weiterverwendung dieser Internetseite sind die einverstanden mit der Verwendung von Cookies.',
        LEARN_MORE: 'Mehr erfahren',

        // analyze.html
        KEYWORDS_HEADLINE: 'Schlüsselwörter',
        TOPICS_HEADLINE: 'Quellthemen',

        // chronicle.html
        PASTQUERIES_HEADLINE: 'Vergangene Suchläufe',
        DATESELECT_DEFAULT: 'auswählen ...',
        DATESELECT_ALL: 'alle',
        DATESELECT_TODAY: 'heute',
        DATESELECT_WEEK: 'diese Woche',
        DATESELECT_MONTH: 'diesen Monat',
        DATESELECT_OLDER: 'älter als einen Monat',
        SEARCH_PLACEHOLDER: 'Suchläufe durchsuchen',
        HISTORY_OFF: 'Suchlaufspeicher abschalten',
        HISTORY_ON: 'Suchlaufspeicher aktivieren',
        CLEARHISTORY_BUTTON: 'Suchläufe entfernen',

        // help.html
        DOCANALYSER_HELP: 'Die wichtigsten Schlüsselwörter und Quellthemen befinden sich auf der linken Seite. ' +
        'Sie können den rechts dargestellten Suchlauf durch auswählen von Schlüsselwörtern und Quellthemen beeinflussen. ' +
        'Desweiteren ist es möglich den Suchlauf durch manuelle Eingaben zu ergänzen. ' +
        'Gegebenenfalls werden relevante Werbeartikel rechts neben den Suchergebnissen erscheinen.',

        // helpKeywords.html
        KEYWORDS_HELP: 'Diese Schlüsselwörter repräsentieren Authoritäten. ' +
        'Eine Authorität ist eine Internetseite zu der von vielen Quellthemen aus verlinkt wird.',

        // helpTopics.html
        TOPICS_HELP: 'Diese Quellthemen repräsentieren sogenannte Zentren. ' +
        'Zentren sind Verzeichnisse von Schlüsselwörtern die zu Schlüsselwortseiten verlinken.',

        // helpPastQueries.html
        PASTQUERIES_HELP: 'Hier können Sie Ihre vergangenen Suchläufe einsehen. ' +
        'Um die gewünschten Suchläufe zu finden können Sie die verschiedenen Filterungsmöglichkeiten nutzen. ' +
        'Sie können die Suchlaufspeicherfunktion jederzeit abschalten. ' +
        'Desweiteren ist es möglich den Suchlaufspeicher manuell zu leeren.',

        // emptyKeywordsTopics.html
        EMPTY_KEYWORDS_TOPICS_HEADLINE: 'Es konnten keine Schlüsselwörter oder Quellthemen gefunden werden!',

        // exception.html
        EXCEPTION_HEADLINE: 'Ein Fehler ist aufgetreten!',

        // timeout.html
        TIMEOUT_HEADLINE: 'Verbindung wurde unterbrochen!',

        // noData.html
        NO_KEYWORDS: 'Keine Schlüsselwörter gefunden...',
        NO_TOPICS: 'Keine Quellthemen gefunden...',

        ERROR_HEADLINE: 'Bitte analysieren Sie ein anderes Dokument oder versuchen Sie es erneut.',

        // dataProtection.html
        DATA_PROT_HEADLINE: 'Datenschutzerklärung',
        DATA_PROT: 'Datenschutz',
        DATA_PROT_P_1: 'Die Betreiber dieser Seiten nehmen ' +
        'den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten ' +
        'vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser ' +
        'Datenschutzerklärung.',
        DATA_PROT_P_2: 'Die Nutzung unserer Website ist in der Regel ohne Angabe ' +
        'personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten ' +
        '(beispielsweise eingegebene Suchbegriffe) erhoben werden, erfolgt dies, soweit ' +
        'möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung ' +
        'nicht an Dritte weitergegeben.',
        DATA_PROT_P_3: 'Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet ' +
        '(z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser ' +
        'Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
        DATA_PROT_COOKIES_P_1: 'Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf ' +
        'Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot ' +
        'nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem ' +
        'Rechner abgelegt werden und die Ihr Browser speichert.',
        DATA_PROT_COOKIES_P_2: 'Wir verwenden Cookies, um die Standard Browserfunktionalität, das ' +
        'Neuladen der Seite, auf unserer Seite zu unterstützen.',
        DATA_PROT_COOKIES_P_3: 'Sie können Ihren Browser so einstellen, dass Sie über das Setzen ' +
        'von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für ' +
        'bestimmte Fälle oder generell ausschliessen sowie das automatische Löschen der ' +
        'Cookies beim Schlie&szlig;en des Browser aktivieren. Bei der Deaktivierung von Cookies kann die ' +
        'Funktionalität dieser Website eingeschränkt sein.'

    });
    // default language
    $translateProvider.preferredLanguage('en');
});

app.directive('resizable', function ($window) {
    return function ($scope) {

        $scope.leftMenu = document.getElementById('menu');
        $scope.scrollbarWidth = getScrollbarWidth($scope.leftMenu);
        $scope.scrollbarWidth = Math.round($scope.scrollbarWidth) * 2; // we have 2 scrollbars

        /** Functions */

        /* get browser default scrollbar width */
        function getScrollbarWidth(element) {
            var scrollbarWidth = element.getBoundingClientRect().width - element.scrollWidth;
            if (isNaN(scrollbarWidth)) {
                console.log("cannot retrieve scrollbar width. Default value will be used");
                scrollbarWidth = 15; // default value
            }
            return scrollbarWidth;
        };

        /* adjusts the width of google search and results */
        $scope.onResizeFunction = function () {
            // current width of left side menu
            var leftMenuWidth = $scope.leftMenu.offsetWidth;
            // cross-browser solution to get current window width:
            var windowWidth = $window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
            // width of right google search = window width - left side menu width
            $scope.searchWidth = (windowWidth - leftMenuWidth - $scope.scrollbarWidth) + "px";
        };

        $scope.resize = function () {
            $scope.onResizeFunction();
            return $scope.safeApply();
        };

        /** END Functions */

        $scope.onResizeFunction(); // call if the page load for the first time

        /* responds to resize events of the left side menu */
        var observer = new MutationObserver(function (mutations) {
            $scope.resize();
        });
        observer.observe($scope.leftMenu, {
            attributes: true
        });

        /* responds to resize events of the window object */
        return angular.element($window).bind('resize', function () {
            //$scope.onResizeFunction();
            //return $scope.safeApply();
            $scope.resize();
        });

    };
});


/** Begin Angular Services */

/**
 * @ngdoc service
 * @name myApp.ConverterService // Provide the module and the service name
 **/
app.service('ConverterService', function () {

    /* convert array to Keywords/Topics Object */
    this.arrToObject = function (arr) {
        var rv = {};
        for (var i = 0, len = arr.length; i < len; ++i) {
            if (typeof arr[i] !== 'undefined') {
                rv[arr[i]] = false;
            }
        }
        return rv;
    }
});

app.service('FooterService', function () {

    this.warningDiv = {message: ""};
    this.showWarning = {value: false};

    this.getWarningDiv = function () {
        return this.warningDiv;
    };

    this.getShowWarning = function () {
        return this.showWarning;
    };

    this.showWarning = function (message) {
        this.warningDiv.message = message;
        this.showWarning.value = true;
    };

    this.hideWarning = function () {
        this.showWarning.value = false;
    };

});

app.service('TopicsService', function () {
    this.topics = {};

    /** Functions */

    this.setTopics = function (topics) {
        this.topics = topics;
    };

    this.selectedTopics = function () {
        var selectedTopics = "";
        for (var topicName in this.topics) {
            if (this.topics[topicName]) {
                selectedTopics += topicName + " ";
            }
        }
        return selectedTopics;
    };

    this.getAll = function () {
        for (var prop in this.topics) {
            if (Object.prototype.hasOwnProperty.call(this.topics, prop)) {
                return Object.keys(this.topics);
            }
        }
        var ret = [];
        return ret;
    };

    this.changeStatus = function (topic) {
        this.topics[topic] = !this.topics[topic];
    };

    this.setStatus = function (topic, status) {
        this.topics[topic] = status;
    };

    /** End Functions */
});

app.service('KeywordsService', function () {
    this.keywords = {}; // all keywords
    this.topKeywords = []; // top 4 keywords

    /** Functions */
    this.setKeywords = function (keywords) {
        this.keywords = keywords;
    };

    this.selectedKeywords = function () {
        var selectedKeywords = "";
        for (var keywordName in this.keywords) {
            if (this.keywords[keywordName]) {
                selectedKeywords += keywordName + " ";
            }
        }
        return selectedKeywords;
    };

    this.selectedKeywordsAsArr = function () {
        var selectedKeywords = [];
        for (var keywordName in this.keywords) {
            if (this.keywords[keywordName]) {
                selectedKeywords.push(keywordName);
            }
        }
        return selectedKeywords;
    };

    this.getAll = function () {
        for (var prop in this.keywords) {
            if (Object.prototype.hasOwnProperty.call(this.keywords, prop)) {
                return Object.keys(this.keywords);
            }
        }
        var ret = [];
        return ret;
    };

    this.changeStatus = function (keyword) {
        this.keywords[keyword] = !this.keywords[keyword];
    };

    this.setStatus = function (keyword, status) {
        this.keywords[keyword] = status;
    };

    this.getTopKeywords = function () {
        return this.topKeywords;
    };

    this.setTopKeywords = function (topKeywords) {
        this.topKeywords = topKeywords;
    };

    /** End Functions */
});

app.service('SearchBarService', function () {
    this.searchBar = {input: ""};

    /** Functions */
    this.setInput = function (input) {
        this.searchBar.input = input;
    };

    this.getSearchBar = function () {
        return this.searchBar;
    };

    /** End Functions */
});

app.service('ReloadService', function ($cookies, $state, $location, $window) {

    /* Changes the URL to the state stored in the cookie */
    this.reloadUrl = function () {
        var reloadCookie = $cookies.get('reloadInfo');
        if (angular.isDefined(reloadCookie)) { // cookie must be set
            $window.location.href = reloadCookie; // redirect to loaded url
        }
    };

});

/** End Angular Services */

/** Begin Angular Controllers */

app.controller('RequestCtrl', ['$scope', '$state', '$stateParams', '$location', 'KeywordsService', 'TopicsService',
    'LocalStorageService', 'ConverterService', '$cookies', 'FooterService',
    function ($scope, $state, $stateParams, $location, KeywordsService,
              TopicsService, LocalStorageService, ConverterService, $cookies, FooterService) {

        /** Functions */
        /* Get the request parameters from the url and place them as keywords and topics */
        $scope.processRequestParameter = function () {
            //window.alert("in processRequestParameter");
            var keywords = [];
            var topics = [];
            var topKeywords = [];
            var keywordsObj = {};
            var topicsObj = {};
            var title = "";
            var status;
            try {
                // fill table with keywords:
                keywords = $stateParams.a.split(";");
                if (keywords.length < 4) {
                    throw {state: 'emptyKeywordsTopics'};
                }
                // fill most important keywords:
                for (var i = 0; i < 4; i++) {
                    topKeywords.push(keywords[i]);
                }
                KeywordsService.setTopKeywords(topKeywords);
                keywordsObj = ConverterService.arrToObject(keywords);
                KeywordsService.setKeywords(keywordsObj);
                // fill table with topics:
                topics = $stateParams.h.split(";");
                if (topics.length > 0) {
                    topicsObj = ConverterService.arrToObject(topics);
                    TopicsService.setTopics(topicsObj);
                    // preselect the top 4 keywords
                    for (var i = 0; i < 4; i++) {
                        keywordsObj[keywords[i]] = true;
                    }
                }
                // get the url of the analysed web file
                title = $stateParams.title;
                if (title.length < 1) {
                    title = "no title";
                }
                $scope.setCookie($location.url()); // stores url for reload purposes
                $location.url($location.path()); // remove request param from url
                // check if the user has activated the chronicle function
                LocalStorageService.loadChronicleStatus();
                status = LocalStorageService.getChronicleStatus();
                if (status > 0 || status === "undefined") {
                    $scope.populateLocalStorage(keywordsObj, topicsObj, title); // save current terms
                }
                else {
                    $scope.loadLocaleStorage(); // just load saved queries
                }
                $state.go('analyze', {searchTerms: topKeywords.join(" ")}); // show terms
            }
            catch (err) {
                $state.go(err.state);
            }
        };

        $scope.loadLocaleStorage = function () {
            if (LocalStorageService.storageAvailable('localStorage')) {
                // LocalStorage is available
                LocalStorageService.loadQueries();
            }
            else {
                // LocalStorage is not available
                FooterService.showWarning('Your Browser does not support local storage.' +
                    'Therefore, the chronicle view is not available.');
            }
        };

        $scope.arraysEqual = function (a, b) {
            if (a instanceof Array && b instanceof Array) {
                if (a === b) return true;
                if (a == null || b == null) return false;
                if (a.length != b.length) return false;

                a.sort();
                b.sort();

                for (var i = 0, len = a.length; i < len; i++) {
                    if (a[i] !== b[i]) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        };

        $scope.populateLocalStorage = function (keywords, topics, title) {
            if (LocalStorageService.storageAvailable('localStorage')) {
                // LocalStorage is available
                var queries = [];
                var currentKeywords = Object.keys(keywords); // keywords as array
                var storedKeywords = [];
                var currentDate = new Date().toDateString(); // ensure that the Date is always in the same format

                var newQuery = LocalStorageService.newQuery(currentDate, keywords, topics, title);
                LocalStorageService.loadQueries();
                queries = LocalStorageService.getQueries();
                // check if query already exists:
                for (var i = 0, len = queries.length; i < len; i++) {
                    if (title === queries[i].title) { // query with same page title is already stored
                        storedKeywords = Object.keys(queries[i].keywords); // its an array
                        if ($scope.arraysEqual(currentKeywords, storedKeywords)) { // compare both arrays
                            return; // an equal query has already been saved; do not save it again
                        }
                    }
                }
                LocalStorageService.addQuery(newQuery); // its a new query; save it
                LocalStorageService.saveQueries();
            }
            else {
                // LocalStorage is not available
                FooterService.showWarning('Your Browser does not support local storage.' +
                    'Therefore, the chronicle view is not available.');
            }

        };

        /* saves a cookie with the actual url;
        * is used for the browser reload button */
        $scope.setCookie = function (url) {
            try {
                var expireDate = new Date();
                expireDate.setDate(expireDate.getDate() + 1);
                url = '#!' + url; // convert to hash bang url
                $cookies.put('reloadInfo', url, {expires: expireDate});
            }
            catch (err) {
                FooterService.showWarning('Can not save cookies: The reload button will have no function!');
            }
        };

        /** End Functions */
        $scope.processRequestParameter();

    }]);


app.controller('HelpCtrl', function ($scope) {
    $scope.showHelp = function () {
        $scope.popoverIsVisible = true;
    };

    $scope.hideHelp = function () {
        $scope.popoverIsVisible = false;
    };
});

app.controller('SideMenuCtrl', function () {

});

app.controller('DropdownMenuCtrl', function ($scope, $state, SearchBarService) {

    /* user clicks on a drop down menu entry */
    $scope.changeView = function (destination) {
        switch (destination) {
            case 'chronicle':
                $state.go(destination);
                break;
            case 'analyze':
                var searchbarInput = SearchBarService.getSearchBar().input;
                if (searchbarInput.length < 1) {
                    searchbarInput = ""; // something went wrong; reset search bar input
                }
                $state.go(destination, {searchTerms: searchbarInput});
                break;
            default:
                $state.go('exception'); // error occurred
        }
    };
});

app.controller('KeywordsMenuCtrl', function ($scope, $rootScope, $state, KeywordsService, TopicsService, SearchBarService,
                                             ReloadService) {
        $scope.keywords = KeywordsService.keywords;
        $scope.keywordsService = KeywordsService.keywords;

        /* a query is loaded (from the Chronicle View) */
        $rootScope.$on('queryLoaded', function () {
            SearchBarService.setInput(""); // clear search bar input
            $scope.performSearch(); // 'click' the top 4 Keywords => put them into the search bar
        });

        // check if a object is empty or not:
        $scope.objIsEmpty = function (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        };

        // user clicked a checkbox:
        $scope.clicked = function (keyword) {
            var status = KeywordsService.keywords[keyword];
            if (TopicsService.getAll().indexOf(keyword) > -1) { //selected keyword is also a topic
                TopicsService.setStatus(keyword, status);
                //window.alert("keyword = " + keyword + " status = " + status);
            }
            //notify SearchInputCtrl:
            $rootScope.$emit('selectedTermsChanged', {term: keyword, status: status});

        };

        /* initialization */
        $scope.init = function () {
            if ($state.is('analyze')) { // we only need this function in the analyze view
                // no keywords found; maybe a page reload
                if (angular.isDefined($scope.keywords) && $scope.objIsEmpty($scope.keywords)) {
                    ReloadService.reloadUrl();
                }
                // The objects are already set to true, but if the keywords are topics at the same time,
                // they must also be manually clicked to transfer the object status of the keywords to the topics
                $scope.topKeywords = KeywordsService.getTopKeywords();
                //window.alert("Länge scope.topkeywords = " + $scope.topKeywords.length);
                if (angular.isDefined($scope.keywords) && $scope.topKeywords.length >= 4) {
                    //window.alert("Scope.keywords ist valide!");
                    for (var i = 0; i < 4; i++) {
                        $scope.clicked($scope.topKeywords[i]);
                    }
                }
            }
        };

        $scope.performSearch = function () {
            // The objects are already set to true, but if the keywords are topics at the same time,
            // they must also be manually clicked to transfer the object status of the keywords to the topics
            $scope.topKeywords = KeywordsService.getTopKeywords();
            if (angular.isDefined($scope.keywords) && $scope.topKeywords.length >= 4) {
                for (var i = 0; i < 4; i++) {
                    $scope.clicked($scope.topKeywords[i]);
                }
            }
        };

        $scope.init();

    }
)
;

app.controller('TopicsMenuCtrl', function ($scope, $rootScope, TopicsService, KeywordsService) {
    $scope.topics = TopicsService.topics;

    // user clicked a checkbox:
    $scope.clicked = function (topic) {
        var status = $scope.topics[topic];

        if (KeywordsService.getAll().indexOf(topic) > -1) { //selected topic is also a keyword
            KeywordsService.setStatus(topic, status);
            //window.alert("topic = " + topic + " status = " + status);
        }
        //notify SearchInputCtrl:
        $rootScope.$emit('selectedTermsChanged', {term: topic, status: status});
    }
});

app.controller('SearchInputCtrl', function ($scope, $rootScope, $location, TopicsService, KeywordsService,
                                            SearchBarService, $state) {
    $scope.topicsService = TopicsService;
    $scope.keywordsService = KeywordsService;
    $scope.searchBar = SearchBarService.getSearchBar(); // search bar
    $scope.searchBarArr = []; // search bar items as array
    $scope.selectedTerms = [];
    $scope.diff = [];

    /** Functions */

    $scope.symmetricDifference = function (a1, a2) {
        var result = [];
        for (var i = 0; i < a1.length; i++) {
            if (a2.indexOf(a1[i]) === -1 && result.indexOf(a1[i]) === -1) { // new difference found
                result.push(a1[i]);
            }
        }
        for (i = 0; i < a2.length; i++) {
            if (a1.indexOf(a2[i]) === -1 && result.indexOf(a2[i]) === -1) {
                result.push(a2[i]);
            }
        }
        return result;
    };

    $scope.changeUrl = function () {
        $location.path('/search/' + $scope.searchBar.input, false); // change url without reloading
    };

    /** End Functions */

    /** Angular Functions */

    /* url has changed -> maybe back or previous button was pressed */
    $rootScope.$on('$locationChangeSuccess', function (scope, next, current) {

        if (next !== current) { // new url must be different
            var path = $location.path(); // get current path

            // user must be in analyze view and his last page must not be the chronicle view:
            if ($state.is('analyze') && !(path.lastIndexOf('/chronicle', 0) === 0)) {
                path = path.slice(8); // remove '/search/' from path
                if (path !== $scope.searchBar.input) { // only sync if path and search bar input are different
                    SearchBarService.setInput(path); // sync search bar input with url
                    $scope.change(); // sync checkboxes with search bar
                }
            }
            else if ($state.is('chronicle')) { // disable browser button for chronicle view
                $location.path('/chronicle', false); // redirect to same page
            }
        }
    });

    /* a term was selected or deselected */
    $rootScope.$on('selectedTermsChanged', function (event, args) {
        var status = args.status; // true for selected; false for deselected
        var selectedTerm = args.term; // keyword or topic
        var queryLength = $scope.searchBar.input.length;
        var query = $scope.searchBar.input.split(/\s+/);
        if (queryLength === 0) {
            query.pop(); // remove first whitespace character
        }
        if (status) { // add term to search bar
            if (query.indexOf(selectedTerm) === -1) { // no duplicate terms
                query.push(selectedTerm);
            }
        }
        else { // remove every occurrence of the term from the search bar
            for (var i = queryLength - 1; i >= 0; i--) {
                if (query[i] === selectedTerm) {
                    query.splice(i, 1);
                }
            }
        }
        SearchBarService.setInput(query.join(" "));
    });

    /* terms were selected or deselected */
    $scope.$watchGroup(['keywordsService.selectedKeywords()', 'topicsService.selectedTopics()'], function (newValues) {

        setTimeout(function () {
            angular.element(document.querySelector('#customSearch')).click(); // execute google search
        }, 0);
        // newValues array contains the current values of the watch expressions
        $scope.selectedKeywords = newValues[0].split(" ");
        $scope.selectedTopics = newValues[1].split(" ");
        $scope.selectedTerms = $scope.selectedKeywords.concat($scope.selectedTopics);
        //window.alert("selectedTerms = " + $scope.selectedTerms.toString());
    });


    /*user manually change the search bar input */
    $scope.change = function () {
        $scope.searchBarArr = $scope.searchBar.input.split(" ");

        $scope.diff = $scope.symmetricDifference($scope.searchBarArr, $scope.selectedTerms);

        for (var i = 0; i < $scope.diff.length; i++) {
            // term must be keyword or topic
            if (KeywordsService.getAll().indexOf($scope.diff[i]) > -1) { // it is a keyword
                KeywordsService.changeStatus($scope.diff[i]);
            }
            if (TopicsService.getAll().indexOf($scope.diff[i]) > -1) { // it is a topic
                TopicsService.changeStatus($scope.diff[i]);
            }
        }
    };

    $scope.click = function () {
        if ($state.is('analyze')) { // change the url only in the analyze view
            $scope.changeUrl(); // change url without reloading
        }
    };

    /** End Angular Functions */

});

app.controller('FooterCtrl', function ($scope, $cookies, FooterService) {

    $scope.showWarning = FooterService.getShowWarning();
    $scope.warningDiv = FooterService.getWarningDiv();

    /* Cookie warning */
    $scope.setCookieValue = function (value) {
        var now = new Date();
        var expirationDate = new Date();
        expirationDate.setTime(+now + (360 * 24 * 60 * 60 * 1000)); // 360 days
        try {
            return $cookies.put('agreement', value, {expires: expirationDate});
        }
        catch (err) {
            FooterService.showWarning('cannot save cookies: The reload button will have no function!');
        }
    };

    $scope.agree = function () {
        $scope.setCookieValue('agreed');
    };

    $scope.hasAgreed = function () {
        var agreementCookie = $cookies.get('agreement');
        return (angular.isDefined(agreementCookie) && agreementCookie === 'agreed'); // cookie must be set
    };
    /* End Cookie warning */

    $scope.hideWarning = function () {
        FooterService.hideWarning();
    }

});

// handles the translation through a 'translate'-filter
app.controller('TranslateController', function($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});

/** End Angular Controllers */

/** Angular Run Block */

app.run(['$route', '$rootScope', '$location', '$window', function ($route, $rootScope, $location) {
    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };

    $rootScope.safeApply = function () {
        var phase = this.$root.$$phase;
        if (phase == '$apply' || phase == '$digest') {
        } else {
            this.$apply();
        }
    };

}]);

/** End Angular Run Block */

//Setup for the Custom Google Search

//Hook callback into the rendered Google Search
window.__gcse = {
    callback: googleCSELoaded
};

function googleCSELoaded() {
    // initial search after the page is loaded for the first time
    var searchText = $("#q").val();
    google.search.cse.element.render({
        gname: 'searchOnlyCSE',
        div: 'results',
        tag: 'searchresults-only',
        attributes: {linkTarget: ''}
    });
    var element = google.search.cse.element.getElement('searchOnlyCSE');
    element.execute(searchText);

    // triggers every following search
    $("#customSearch").click(function () {
        var searchText = $("#q").val();
        google.search.cse.element.render({
            gname: 'searchOnlyCSE',
            div: 'results',
            tag: 'searchresults-only',
            attributes: {linkTarget: ''}
        });
        var element = google.search.cse.element.getElement('searchOnlyCSE');
        element.execute(searchText);
    })
}

//Custom Google Search
(function () {
    var cx = '003813809171160788124:z54qpilp6j4';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();
