var app = angular.module('docanalyser', ['ui.router', 'ngRoute', 'ngCookies', 'pascalprecht.translate']);

app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('analyze', {
            url: '/search/:searchTerms',
            params: {searchTerms: {dynamic: true}},
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
            url: '?query&timeout',
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
            url: '?query&exception',
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
        });
}]);

// translations English('en') - German('de')
app.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        // search.html
        SEARCH_BUTTON: 'Search',
        DT_COOCCS: 'Search Suggestions',
        DT_RELEVANT: 'Relevant Terms',
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
            DT_COOCCS: 'Suchvorschläge',
            DT_RELEVANT: 'Relevante Begriffe',
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
            DATA_PROT_P_3: 'Wir weisen darauf hin, dass die Datenübertragung im Internet ' +
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

    // escapes HTML in the translation for security purposes
    $translateProvider.useSanitizeValueStrategy('escape');
    // default language
    $translateProvider.preferredLanguage('en');
});

/**
 * @ngdoc directive
 * @name docanalyser.directive:resizable
 * @restrict 'AC'
 * @element ANY
 * @priority 1000
 * @scope
 * @description This directive causes the right-hand pane to adjust its width when resize events occur.
 * "resize" events occur when the user changes the width of the left menu or the browser window size changes.
 * @example
 <example module="docanalyser">
 <file name="search.html">
 <div resizable ng-style="{width: searchWidth]"></div>
        </file>
    </example>
 **/
app.directive('resizable', function ($window) {
    return function ($scope) {

        $scope.leftMenu = document.getElementById('menu');
        $scope.scrollbarWidth = getScrollbarWidth();

        /** Functions */

        /* get browser default scrollbar width */
        function getScrollbarWidth() {
            var scrollbarWidth;
            var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            if (isMac) {
                console.log("mac os detected. Default value for scrollbar width will be used");
                scrollbarWidth = 25; // default value for mac os
            }
            else {
                scrollbarWidth = 30; // default scrollbar width
            }
            return scrollbarWidth; // we have two scroll bars
        }

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
            $scope.resize();
        });

    };
});


/** Begin Angular Services */

/**
 * @ngdoc service
 * @name docanalyser.UtilsService
 * @description Provides a lot of useful features needed by multiple controllers.
 **/
app.service('UtilsService', function () {

    /**
     * @ngdoc
     * @name docanalyser.UtilsService#arrToObject
     * @methodOf docanalyser.UtilsService
     *
     * @description
     * Method to convert an array to an term Object. The "selected" status is set to false for all elements.
     * @example
     * object = UtilsService.arrToObject(arr);
     * @param {Array} arr the array to be converted.
     * @returns {Object} converted term object.
     */
    this.arrToObject = function (arr) {
        var rv = {};
        for (var i = 0, len = arr.length; i < len; ++i) {
            if (typeof arr[i] !== 'undefined') {
                rv[arr[i]] = false;
            }
        }
        return rv;
    };


    /**
     * @ngdoc
     * @name docanalyser.UtilsService#arraysEqual
     * @methodOf docanalyser.UtilsService
     *
     * @description
     * checks if two arrays are equal or not.
     * @example
     * ret = UtilsService.arraysEqual(arr1, arr2);
     * @param {Array} arr1 first array
     * @param {Array} arr2 second array
     * @returns {boolean} true if both arrays are equal, false if not.
     */
    this.arraysEqual = function (a, b) {
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

    /**
     * @ngdoc
     * @name docanalyser.UtilsService#round
     * @methodOf docanalyser.UtilsService
     *
     * @description
     * Rounding function, see:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
     * for more info
     * @example
     * object = UtilsService.arrToObject(arr);
     * @param {float} number number to be rounded
     * @param {int} precision digits after the comma
     * @returns {float} rounded number
     */
    this.round = function (number, precision) {
        var shift = function (number, precision, reverseShift) {
            if (reverseShift) {
                precision = -precision;
            }
            var numArray = ("" + number).split("e");
            return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
        };
        return shift(Math.round(shift(number, precision, false)), precision, true);
    };

    /* helper function for getCommonElements */
    this.intersect = function (leftArr, rightArr) {
        return leftArr.filter(function (leftTerm) {
            return rightArr.some(function (rightTerm) {
                return rightTerm === leftTerm;
            });
        });
    };

    /**
     * @ngdoc
     * @name docanalyser.UtilsService#getCommonElements
     * @methodOf docanalyser.UtilsService
     *
     * @description Determine the intersection of a set of arrays.
     * Array structure should be array[array1, array2, ..., arrayN]
     * @example
     * newArr = UtilsService.getCommonElements(arrayContainer);
     * @param {Array} array the array, that contains a set of arrays
     * @returns {Array} intersection of all arrays
     */
    this.getCommonElements = function (array) {
        var leftArr = array[0];
        var rightArr = array[1];
        var rest = array.slice(2);
        if (rightArr === undefined) {
            return leftArr;
        }
        return this.getCommonElements([this.intersect(leftArr, rightArr)].concat(rest));
    };

});


/**
 * @ngdoc service
 * @name docanalyser.LanguageService
 * @description Service for changing the language of the user interface
 * @property {String} language:String Global String that contains the current language.
 */
app.service('LanguageService', function () {
    this.language = "";

    this.setLanguage = function (langKey) {
        this.language = langKey;
    };

    this.getLanguage = function () {
        return this.language;
    }

});

/**
 * @ngdoc service
 * @name docanalyser.FooterService
 * @description The service is responsible for displaying alerts in the lower footer area.
 * @property {Object} warningDiv:Object Global object for the warning message.
 * @property {Object} showWarning:Object Global object indicating whether to display a warning.
 */
app.service('FooterService', function () {

    this.warningDiv = {message: ""};
    this.showWarning = {value: false};

    this.getWarningDiv = function () {
        return this.warningDiv;
    };

    this.getShowWarning = function () {
        return this.showWarning;
    };

    /**
     * @ngdoc
     * @name docanalyser.FooterService#showWarning
     * @methodOf docanalyser.FooterService
     *
     * @description show a message in the footer area of the website.
     * @example
     * FooterService.showWarning("custom Message");
     * @param {String} message message to be displayed
     */
    this.showWarning = function (message) {
        this.warningDiv.message = message;
        this.showWarning.value = true;
    };

    /**
     * @ngdoc
     * @name docanalyser.FooterService#hideWarning
     * @methodOf docanalyser.FooterService
     *
     * @description close the custom message in the footer area of the website.
     * @example
     * FooterService.hideWarning();
     */
    this.hideWarning = function () {
        this.showWarning.value = false;
    };

});

/**
 * @ngdoc service
 * @name docanalyser.TopicsService
 * @description This service provides a custom interface for the topics.
 * @property {Object} topics:Object Global object for the source topics.
 */
app.service('TopicsService', function () {
    this.topics = {};

    /** Functions */

    this.setTopics = function (topics) {
        this.topics = topics;
    };

    /**
     * @ngdoc
     * @name docanalyser.TopicsService#selectedTopics
     * @methodOf docanalyser.TopicsService
     *
     * @description get the current selected topics.
     * @example
     * mySelectedTopics = TopicsService.selectedTopics();
     * @returns {String} selected topics
     */
    this.selectedTopics = function () {
        var selectedTopics = "";
        for (var topicName in this.topics) {
            if (this.topics[topicName]) {
                selectedTopics += topicName + " ";
            }
        }
        return selectedTopics;
    };

    /**
     * @ngdoc
     * @name docanalyser.TopicsService#getAll
     * @methodOf docanalyser.TopicsService
     *
     * @description get all topics as array.
     * @example
     * myTopics = TopicsService.getAll();
     * @returns {Array} all topics
     */
    this.getAll = function () {
        for (var prop in this.topics) {
            if (Object.prototype.hasOwnProperty.call(this.topics, prop)) {
                return Object.keys(this.topics);
            }
        }
        var ret = [];
        return ret;
    };

    /**
     * @ngdoc
     * @name docanalyser.TopicsService#changeStatus
     * @methodOf docanalyser.TopicsService
     *
     * @description change the status of an topic
     * @example
     * TopicsService.changeStatus(myTopic);
     * @param {Object} topic topic whose status is to be changed
     */
    this.changeStatus = function (topic) {
        this.topics[topic] = !this.topics[topic];
    };

    this.setStatus = function (topic, status) {
        this.topics[topic] = status;
    };

    /** End Functions */
});

/**
 * @ngdoc service
 * @name docanalyser.KeywordsService
 * @description This service provides a custom interface for the keywords.
 * @property {Object} keywords:Object Global object for the keywords.
 * @property {Array} topKeywords:Array Global array for the top four keywords.
 */
app.service('KeywordsService', function () {
    this.keywords = {}; // all keywords
    this.topKeywords = []; // top 4 keywords

    /** Functions */
    this.setKeywords = function (keywords) {
        this.keywords = keywords;
    };

    /**
     * @ngdoc
     * @name docanalyser.KeywordsService#selectedKeywords
     * @methodOf docanalyser.KeywordsService
     *
     * @description get the current selected keywords.
     * @example
     * mySelectedKeywords = KeywordsService.selectedKeywords();
     * @returns {String} selected keywords
     */
    this.selectedKeywords = function () {
        var selectedKeywords = "";
        for (var keywordName in this.keywords) {
            if (this.keywords[keywordName]) {
                selectedKeywords += keywordName + " ";
            }
        }
        return selectedKeywords;
    };

    /**
     * @ngdoc
     * @name docanalyser.KeywordsService#selectedKeywordsAsArr
     * @methodOf docanalyser.KeywordsService
     *
     * @description get the current selected keywords as array.
     * @example
     * mySelectedKeywords = KeywordsService.selectedKeywordsAsArr();
     * @returns {Array} selected keywords as Array
     */
    this.selectedKeywordsAsArr = function () {
        var selectedKeywords = [];
        for (var keywordName in this.keywords) {
            if (this.keywords[keywordName]) {
                selectedKeywords.push(keywordName);
            }
        }
        return selectedKeywords;
    };

    /**
     * @ngdoc
     * @name docanalyser.KeywordsService#getAll
     * @methodOf docanalyser.KeywordsService
     *
     * @description get all keywords as array.
     * @example
     * myTopics = KeywordsService.getAll();
     * @returns {Array} all keywords
     */
    this.getAll = function () {
        for (var prop in this.keywords) {
            if (Object.prototype.hasOwnProperty.call(this.keywords, prop)) {
                return Object.keys(this.keywords);
            }
        }
        var ret = [];
        return ret;
    };

    /**
     * @ngdoc
     * @name docanalyser.KeywordsService#changeStatus
     * @methodOf docanalyser.KeywordsService
     *
     * @description change the status of an keyword
     * @example
     * KeywordsService.changeStatus(myKeyword);
     * @param {Object} keyword keyword whose status is to be changed
     */
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

/**
 * @ngdoc service
 * @name docanalyser.SearchBarService
 * @description This service provides a custom interface for the search bar.
 * @property {Object} searchBar:Object global object for the search bar.
 */
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

/**
 * @ngdoc service
 * @name docanalyser.ReloadService
 * @description This service allows reloading the SPA.
 */
app.service('ReloadService', function ($cookies, $state, $location, $window) {

    /**
     * @ngdoc
     * @name docanalyser.ReloadService#reloadUrl
     * @methodOf docanalyser.ReloadService
     *
     * @description Changes the URL to the state stored in the reloadCookie.
     * @example
     * ReloadService.reloadUrl();
     */
    this.reloadUrl = function () {
        var reloadCookie = $cookies.get('reloadInfo');
        if (angular.isDefined(reloadCookie)) { // cookie must be set
            $window.location.href = reloadCookie; // redirect to loaded url
        }
    };

});

/** End Angular Services */

/** Begin Angular Controllers */

/**
 * @ngdoc controller
 * @name docanalyser.controller:RequestCtrl
 * @description Controller that receives and processes the request parameters.
 */
app.controller('RequestCtrl', ['$scope', '$state', '$stateParams', '$location', 'KeywordsService', 'TopicsService',
    'LocalStorageService', 'UtilsService', '$cookies', 'FooterService',
    function ($scope, $state, $stateParams, $location, KeywordsService,
              TopicsService, LocalStorageService, UtilsService, $cookies, FooterService) {

        /** Functions */

        /**
         * @ngdoc function
         * @name docanalyser.controller:RequestCtrl#processRequestParameter
         * @methodOf docanalyser.controller:RequestCtrl
         * @description Get the request parameters from the url and place them as keywords and topics.
         * Preselect the top four keywords. If all goes well, the program changes to the analysis view.
         * @example
         * processRequestParameter();
         */
        $scope.processRequestParameter = function () {
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
                keywordsObj = UtilsService.arrToObject(keywords);
                // preselect the top 4 keywords
                for (var i = 0; i < 4; i++) {
                    keywordsObj[keywords[i]] = true;
                }
                KeywordsService.setKeywords(keywordsObj);
                // fill table with topics:
                topics = $stateParams.h.split(";");
                if (topics.length > 0) {
                    topicsObj = UtilsService.arrToObject(topics);
                    TopicsService.setTopics(topicsObj);
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

        /**
         * @ngdoc function
         * @name docanalyser.controller:RequestCtrl#loadLocaleStroage
         * @methodOf docanalyser.controller:RequestCtrl
         * @description load all saved queries.
         * @example
         * loadLocaleStorage();
         */
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

        /**
         * @ngdoc function
         * @name docanalyser.controller:RequestCtrl#populateLocalStorage
         * @methodOf docanalyser.controller:RequestCtrl
         * @description save the current query into the local storage.
         * @example
         * populateLocalStorage();
         */
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
                        if (UtilsService.arraysEqual(currentKeywords, storedKeywords)) { // compare both arrays
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

        /**
         * @ngdoc function
         * @name docanalyser.controller:RequestCtrl#setCookie
         * @methodOf docanalyser.controller:RequestCtrl
         * @description Saves a cookie with the actual url; is used for the browser reload button
         * @example
         * setCookie(url);
         */
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

/**
 * @ngdoc controller
 * @name docanalyser.controller:HelpCtrl
 * @description Controller responsible for displaying or hiding the help texts.
 * @property {boolean} popoverIsVisible:boolean Specifies whether the help text should be displayed.
 */
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

/**
 * @ngdoc controller
 * @name docanalyser.controller:DropdownMenuCtrl
 * @description Controller responsible for switching between analyse and chronicle view.
 */
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

/**
 * @ngdoc controller
 * @name docanalyser.controller:KeywordsMenuCtrl
 * @description Controller for the management of the keywords. Here user interactions are treated.
 * @property {Object} keywords:Object Contains all keywords.
 */
app.controller('KeywordsMenuCtrl', function ($scope, $rootScope, $state, KeywordsService, TopicsService, SearchBarService,
                                             ReloadService) {
        $scope.keywords = KeywordsService.keywords;

        /**
         * @ngdoc function
         * @name docanalyser.controller:KeywordsMenuCtrl#queryLoaded
         * @methodOf docanalyser.controller:KeywordsMenuCtrl
         * @description A query is loaded (from the Chronicle View).
         * The top four keywords are written in the search bar and a google search is performed.
         * @example
         * $rootScope.$broadcast('queryLoaded');
         */
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

        /**
         * @ngdoc function
         * @name docanalyser.controller:KeywordsMenuCtrl#clicked
         * @methodOf docanalyser.controller:KeywordsMenuCtrl
         * @description The user has checked a keywords checkbox.
         * Informs the SearchInputCtrl that a term has been selected.
         * @params {Object} keyword the selected keyword
         */
        $scope.clicked = function (keyword) {
            var status = KeywordsService.keywords[keyword];
            if (TopicsService.getAll().indexOf(keyword) > -1) { //selected keyword is also a topic
                TopicsService.setStatus(keyword, status);
            }
            //notify SearchInputCtrl:
            $rootScope.$emit('selectedTermsChanged', {term: keyword, status: status});

        };


        /**
         * @ngdoc function
         * @name docanalyser.controller:KeywordsMenuCtrl#init
         * @methodOf docanalyser.controller:KeywordsMenuCtrl
         * @description Initialization stuff. Synchronizes the status of keywords and source topics.
         */
        $scope.init = function () {
            if ($state.is('analyze')) { // we only need this function in the analyze view
                // no keywords found; maybe a page reload
                if (angular.isDefined($scope.keywords) && $scope.objIsEmpty($scope.keywords)) {
                    ReloadService.reloadUrl();
                }
                // The objects are already set to true, but if the keywords are topics at the same time,
                // they must also be manually clicked to transfer the object status of the keywords to the topics
                $scope.topKeywords = KeywordsService.getTopKeywords();
                if (angular.isDefined($scope.keywords) && $scope.topKeywords.length >= 4) {
                    for (var i = 0; i < 4; i++) {
                        $scope.clicked($scope.topKeywords[i]);
                    }
                }
                $rootScope.$emit('keywordsInitFinished', '');
            }
        };

        /**
         * @ngdoc function
         * @name docanalyser.controller:KeywordsMenuCtrl#performSearch
         * @methodOf docanalyser.controller:KeywordsMenuCtrl
         * @description Synchronizes the status of keywords and source topics and perform a google search.
         */
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
);

/**
 * @ngdoc controller
 * @name docanalyser.controller:TopicsMenuCtrl
 * @description Controller for the management of the source topics. Here user interactions are treated.
 * @property {Object} topics:Object Contains all source topics.
 */
app.controller('TopicsMenuCtrl', function ($scope, $rootScope, TopicsService, KeywordsService) {
    $scope.topics = TopicsService.topics;

    /**
     * @ngdoc function
     * @name docanalyser.controller:TopicsMenuCtrl#clicked
     * @methodOf docanalyser.controller:TopicsMenuCtrl
     * @description The user has checked a source topics checkbox.
     * Informs the SearchInputCtrl that a term has been selected.
     * @params {Object} topic the selected source topic
     */
    $scope.clicked = function (topic) {
        var status = $scope.topics[topic];

        if (KeywordsService.getAll().indexOf(topic) > -1) { //selected topic is also a keyword
            KeywordsService.setStatus(topic, status);
        }
        //notify SearchInputCtrl:
        $rootScope.$emit('selectedTermsChanged', {term: topic, status: status});
    }
});

/**
 * @ngdoc controller
 * @name docanalyser.controller:SearchInputCtrl
 * @description Controller for the management of the search bar. Here user interactions are treated and the cooccs hash
 * is maintained.
 * @property {Object} searchBar:Object The search bar Object.
 * @property {Array} searchBarArr:Array The search bar input as array.
 * @property {Object} cooccs:Object The cooccs hash.
 * @property {Array} selectedTerms:Array Contains the selected Terms (checkboxes).
 * @property {boolean} showSuggestions:boolean Determines whether search suggestions are displayed.
 * @property {boolean} autoComplete:boolean Determines whether search suggestions and relevant terms are displayed.
 * @property {Array} searchSuggestions:Array Contains the search suggestions.
 * @property {Array} relevantTerms:Array Contains the relevant terms.
 *
 */
app.controller('SearchInputCtrl', function ($scope, $rootScope, $location, TopicsService, KeywordsService,
                                            SearchBarService, $state, LocalStorageService, UtilsService, LanguageService) {
        $scope.topicsService = TopicsService;
        $scope.keywordsService = KeywordsService;
        $scope.searchBar = SearchBarService.getSearchBar(); // search bar
        $scope.searchBarArr = []; // search bar items as array
        $scope.cooccs = {}; // co-occurrences
        $scope.previousSearchBar = []; // is used so that only different search trigger updatecooccs()
        $scope.selectedTerms = []; // selected keywords + source topics
        $scope.outerKeys = []; // outer keys of cooccs hash
        $scope.showSuggestions = false; // determines whether search suggestions are displayed
        $scope.searchSuggestions = [];
        $scope.relevantTerms = [];
        $scope.autoComplete = true; // determines whether search suggestions and relevant terms are displayed

        /** Functions */

        $scope.lastWord = function (str) {
            if (str.trim() === "") {
                return "";
            } else {
                var splitStr = str.split(' ');
                splitStr = splitStr.filter($scope.lengthFilter);
                return splitStr[splitStr.length - 1];
            }
        };

        $scope.lengthFilter = function (str) {
            return str.length >= 1;
        };

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
            //$location.path('/search/' + $scope.searchBar.input, false); // change url without reloading
            $state.go('analyze', {searchTerms: $scope.searchBar.input});
        };

        /* returns all search terms of a given word (=outerKey) */
        $scope.getSortedCooccs = function (outerKey) {
            var keysSorted = Object.keys($scope.cooccs[outerKey]).sort(function (a, b) {
                return $scope.cooccs[outerKey][b] - $scope.cooccs[outerKey][a];
            });
            // capitalize first letters
            keysSorted.forEach(function (element, i) {
                keysSorted[i] = keysSorted[i].charAt(0).toUpperCase() + keysSorted[i].slice(1);
            });
            return keysSorted;
        };

        /* returns the top 3 search terms of a given word (=outerKey) */
        $scope.getTopSortedCooccs = function (outerKey, number) {
            var keysSorted = Object.keys($scope.cooccs[outerKey]).sort(function (a, b) {
                return $scope.cooccs[outerKey][b] - $scope.cooccs[outerKey][a];
            });
            return keysSorted.slice(0, number);
        };

        $scope.filterGermanWords = function () {
            var searchBarArr = [];

            for (var i = 0, lengthI = $scope.searchBarArr.length; i < lengthI; i++) {
                if (typeof $scope.searchBarArr[i] === "undefined") { // ignore undefined elements
                    continue;
                }
                var word = $scope.searchBarArr[i];
                if (word[0] !== word[0].toLowerCase()) { // must be a noun or name
                    searchBarArr.push(word.toLowerCase());
                }
            }
            return searchBarArr;
        };

        $scope.filterEnglishWords = function () {
            // only work with english words:
            var doc = nlp($scope.searchBarArr);
            var nouns = doc.nouns().out('array');
            var topics = doc.topics().out('array'); // people, places, organizations...
            return nouns.concat(topics);
        };

        $scope.countFrequency = function (arr) {
            return arr.reduce(function (stats, word) {

                if (stats.hasOwnProperty(word)) {
                    stats[word] = stats[word] + 1;
                } else {
                    stats[word] = 1;
                }
                return stats;

            }, {});
        };

        /** End Functions */

        /** Angular Functions */

        /**
         * @ngdoc function
         * @name docanalyser.controller:SearchInputCtrl#locationChangeSuccess
         * @methodOf docanalyser.controller:SearchInputCtrl
         * @description The url has changed -> maybe back or previous button was pressed.
         * Synchronize the search bar input with the url. Disable the browser back button for the chronicle view.
         * @params {Object} scope the scope Object
         * @params {String} next the new url
         * @params {String} current the current url
         */
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

        /**
         * @ngdoc function
         * @name docanalyser.controller:SearchInputCtrl#selectedTermsChanged
         * @methodOf docanalyser.controller:SearchInputCtrl
         * @description A term was selected or deselected. The term is added or removed from the search bar.
         * @params {Object} event
         * @params {Object} args passed parameters; the selected term.
         */
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
            setTimeout(function () {
                angular.element(document.querySelector('#customSearch')).click(); // execute google search
            }, 0);
        });

        /**
         * @ngdoc function
         * @name docanalyser.controller:SearchInputCtrl#watchGroup
         * @methodOf docanalyser.controller:SearchInputCtrl
         * @description Terms were selected or deselected. Maintain the selectedTerms and searchBarArr properties.
         * @params {Array} newValues contrains the new selected terms
         */
        $scope.$watchGroup(['keywordsService.selectedKeywords()', 'topicsService.selectedTopics()'], function (newValues) {

            // newValues array contains the current values of the watch expressions
            $scope.selectedKeywords = newValues[0].split(/\s+/);
            $scope.selectedTopics = newValues[1].split(/\s+/);
            $scope.selectedTerms = $scope.selectedKeywords.concat($scope.selectedTopics);
            $scope.searchBarArr = $scope.searchBar.input.split(/\s+/); // maintain searchBarArr
        });

        /**
         * @ngdoc function
         * @name docanalyser.controller:SearchInputCtrl#change
         * @methodOf docanalyser.controller:SearchInputCtrl
         * @description The user manually change the search bar input.
         * Synchronize the search bar input with the status of the checkboxes.
         */
        $scope.change = function () {
            $scope.searchBarArr = $scope.searchBar.input.split(/\s+/);

            var diff = $scope.symmetricDifference($scope.searchBarArr, $scope.selectedTerms);

            for (var i = 0; i < diff.length; i++) {
                // term must be keyword or topic
                if (KeywordsService.getAll().indexOf(diff[i]) > -1) { // it is a keyword
                    KeywordsService.changeStatus(diff[i]);
                }
                if (TopicsService.getAll().indexOf(diff[i]) > -1) { // it is a topic
                    TopicsService.changeStatus(diff[i]);
                }
            }
        };

        /**
         * @ngdoc function
         * @name docanalyser.controller:SearchInputCtrl#searching
         * @methodOf docanalyser.controller:SearchInputCtrl
         * @description The user has entered something in the search bar.
         * Search suggestions and relevant terms are determined here.
         */
        $scope.searching = function () {
            var outerTerms;
            var innerTerms = [];
            var outerTerm = "";
            var innerTerm = "";
            var suggestionString = "";
            var searchBarArr = $scope.searchBar.input.toLowerCase().split(/\s+/); // search terms (all lower case)
            var userInput = $scope.lastWord($scope.searchBar.input); // last word of the search bar
            if (userInput === "") {
                return; // no user Input; do nothing
            }
            userInput = userInput.toLowerCase();

            outerTerms = $scope.outerKeys.filter(function (term) { // outerTerms must match the last word
                if (term.lastIndexOf(userInput, 0) === 0) { // = term.startsWith(userInput)
                    return term;
                }
            });


            $scope.searchSuggestions = []; // delete all data from last call

            // Determine how many terms are proposed, depending on how many outerTerms there are
            var outerLength = outerTerms.length;
            var numberInnerTerms;
            if (outerLength <= 1) {
                numberInnerTerms = 25;
            }
            else if (outerLength <= 2) {
                numberInnerTerms = 5;
            }
            else {
                numberInnerTerms = 3;
            }

            for (var i = 0; i < outerLength; i++) {
                outerTerm = outerTerms[i];
                if (typeof outerTerm !== "undefined") {
                    innerTerms = $scope.getTopSortedCooccs(outerTerm, numberInnerTerms); // get top n inner Terms
                    for (var j = 0, innerLength = innerTerms.length; j < innerLength; j++) {
                        innerTerm = innerTerms[j];
                        if (typeof innerTerm !== "undefined" && searchBarArr.indexOf(innerTerm) === -1) {
                            // capitalize first letters
                            outerTerm = outerTerm.charAt(0).toUpperCase() + outerTerm.slice(1);
                            innerTerm = innerTerm.charAt(0).toUpperCase() + innerTerm.slice(1);
                            suggestionString = outerTerm + " " + innerTerm; // this is displayed to the user
                            $scope.searchSuggestions.push(suggestionString);
                        }
                    }
                }
            }

            if (typeof $scope.searchSuggestions !== "undefined" && $scope.searchSuggestions.length > 25) {
                $scope.showSuggestions = $scope.searchSuggestions.slice(0, 25); // only show the top 25 suggestions
            }


            /* Determine relevant term. The intersection of all cooccs of search terms currently in the search bar. */
            $scope.relevantTerms = []; // delete all data from last call
            innerTerms = [];

            for (var i = 0, length = searchBarArr.length; i < length; i++) {
                outerTerm = searchBarArr[i];
                // term must be a outerKey in cooccs.
                if (typeof outerTerm !== "undefined" && $scope.outerKeys.indexOf(outerTerm) !== -1) {
                    innerTerms.push($scope.getSortedCooccs(outerTerm)); // all inner Terms; max 50
                }
            }

            $scope.relevantTerms = UtilsService.getCommonElements(innerTerms); // intersection of all arrays
            if (typeof $scope.relevantTerms !== "undefined" && $scope.relevantTerms.length > 10) {
                $scope.relevantTerms = $scope.relevantTerms.slice(0, 10); // only display the top 10 common terms
            }

            $scope.showSuggestions = true;
        };


        /**
         * @ngdoc function
         * @name docanalyser.controller:SearchInputCtrl#chooseSuggestion
         * @methodOf docanalyser.controller:SearchInputCtrl
         * @description The user has selected a search suggestion. Appends the suggestion to the existing search bar input.
         * @params {String} string the selected search suggestion
         */
        $scope.chooseSuggestion = function (string) {
            var tempArray = $scope.searchBarArr;
            tempArray.pop();
            var tempString = tempArray.join(" ") + " ";
            var finalInput = tempString + string;
            SearchBarService.setInput(finalInput);
            $scope.showSuggestions = false;
            $scope.change(); // sync checkboxes with search bar input
        };

        /**
         * @ngdoc function
         * @name docanalyser.controller:SearchInputCtrl#chooseRelevantTerm
         * @methodOf docanalyser.controller:SearchInputCtrl
         * @description The user has selected a relevant term. Appends the term to the existing search bar input.
         * @params {String} string the selected relevant term
         */
        $scope.chooseRelevantTerm = function (string) {
            var finalInput = $scope.searchBarArr;
            finalInput.push(string);
            SearchBarService.setInput(finalInput.join(" "));
            $scope.showSuggestions = false;
            $scope.change(); // sync checkboxes with search bar input
        };

        /* user clicked the activate/deactivate autocomplete button */
        $scope.changeAutoComplete = function () {
            $scope.autoComplete = !$scope.autoComplete;
        };

        /**
         * @ngdoc function
         * @name docanalyser.controller:SearchInputCtrl#updateCooccs
         * @methodOf docanalyser.controller:SearchInputCtrl
         * @description The user has performed a google search. Here the cooccs hash is updated.
         * Only nouns and names are considered.
         */
        $scope.updateCooccs = function () {

            /* ! IMPORTANT !
             * In the comments $scope.cooccs is considered cooccs
             */
            var currentWord;
            var frequency; // Frequencies of the words
            var significance;
            var keys = {}; // separate keys object is used to calculate only the significance of new terms
            var innerKeys = [];
            var outerKeys = [];
            var newKeys = []; // is needed so that new terms are not deleted directly when the cooccs hash is full.
            var searchBarArr = [];

            var langKey = LanguageService.getLanguage();

            if (langKey === "en") {
                searchBarArr = $scope.filterEnglishWords();
            }
            else {
                searchBarArr = $scope.filterGermanWords();
            }

            // example: frequency[Mathematik] = 1 means Mathematik once occurred in the search input
            frequency = $scope.countFrequency(searchBarArr);

            $scope.previousSearchBar = $scope.searchBarArr; // save current search bar input

            /* fill cooccs object */
            for (var i = 0, len = searchBarArr.length; i < len; i++) {
                currentWord = searchBarArr[i]; // a word that occurred in the search input
                keys[currentWord] = [];
                for (var j = 0, len = searchBarArr.length; j < len; j++) {
                    var wordb = searchBarArr[j];
                    // add every other word to the inner cooccs of cooccs[currentWord]
                    if (currentWord !== wordb) {
                        if (keys[currentWord].indexOf(wordb) === -1) {
                            keys[currentWord].push(wordb); // fill separate keys object
                        }
                        if ($scope.cooccs.hasOwnProperty(currentWord)) {

                            if ($scope.cooccs[currentWord].hasOwnProperty(wordb)) {
                                $scope.cooccs[currentWord][wordb] = ($scope.cooccs[currentWord][wordb]) + 1;
                            }
                            else {
                                var innercooccs = $scope.cooccs[currentWord];
                                innercooccs[wordb] = 1;
                                $scope.cooccs[currentWord] = innercooccs;
                                if (newKeys.indexOf(wordb) === -1) {
                                    newKeys.push(wordb); // a new term has been added
                                }
                            }
                        }
                        else { // first pass of the inner loop

                            var innercooccs = {};
                            innercooccs[wordb] = 1;
                            $scope.cooccs[currentWord] = innercooccs;
                            /* For example, the result has the form: cooccs['Mathematik']['Wissenschaft'] = 1; */
                        }
                    }
                }
            }

            /* calculate significance */
            outerKeys = Object.keys(keys);
            outerKeys.forEach(function (worda) {
                innerKeys = keys[worda];
                innerKeys.forEach(function (wordb) {
                    /*
                     * (DICE-method): calculate significance =
                     * (2 * occurences of worda with wordb) / (occurences of worda + occurences of wordb)
                     */
                    significance = (2 * $scope.cooccs[worda][wordb]) / (frequency[worda] + frequency[wordb]);
                    significance = UtilsService.round(significance, 2);
                    $scope.cooccs[worda][wordb] = significance;
                    //console.log('Signifikanzberechnung: cooccs[' + worda + '][' + wordb + '] = ' + $scope.cooccs[worda][wordb])
                });
            });

            /* maintain cooccs : save a maximum of 50 search terms (determination by significance) */
            outerKeys.forEach(function (worda) {
                    var unsortedKeys = Object.keys($scope.cooccs[worda]);

                    if (unsortedKeys.length > 50) { // cooccs has reached its maximum. Delete all unimportant terms.
                        var sortedKeys = unsortedKeys.sort(function (a, b) {
                            return $scope.cooccs[worda][b] - $scope.cooccs[worda][a];
                        }); // sorted descending by significance
                        sortedKeys = sortedKeys.filter(function (innerKey) { // remove all inner keys newly added in this run
                            return newKeys.indexOf(innerKey) < 0;
                        });
                        var needlessKeys = sortedKeys.slice(50);
                        needlessKeys.forEach(function (needlessKey) {
                            delete $scope.cooccs[worda][needlessKey]; // delete search terms with the lowest significance
                        });
                    }
                    else if (unsortedKeys.length > 25) { // cooccs is getting too full, delete the least important term
                        var sortedKeys = unsortedKeys.sort(function (a, b) {
                            return $scope.cooccs[worda][b] - $scope.cooccs[worda][a];
                        }); // sorted descending by significance
                        sortedKeys = sortedKeys.filter(function (innerKey) { // remove all inner keys newly added in this run
                            return newKeys.indexOf(innerKey) < 0;
                        });
                        var needlessKey = sortedKeys.pop();
                        delete $scope.cooccs[worda][needlessKey];
                    }
                }
            )
            ;

            $scope.outerKeys = Object.keys($scope.cooccs); // maintain outerKeys
            /* store cooccs in local web storage */
            LocalStorageService.setCooccs($scope.cooccs);
            LocalStorageService.saveCooccs();
        }
        ;

        /**
         * @ngdoc function
         * @name docanalyser.controller:SearchInputCtrl#click
         * @methodOf docanalyser.controller:SearchInputCtrl
         * @description The user has clicked the search button. The url is updated with the new search terms.
         */
        $scope.click = function () {
            if ($state.is('analyze')) { // change the url only in the analyze view
                $scope.changeUrl();
            }
            if ($scope.searchBarArr.length > 1 &&
                !UtilsService.arraysEqual($scope.searchBarArr, $scope.previousSearchBar)) {
                $scope.updateCooccs();
            }
        };

        $rootScope.$on('keywordsInitFinished', function () {
            $scope.searchBarArr = $scope.searchBar.input.split(/\s+/);
        });

        /**
         * @ngdoc function
         * @name docanalyser.controller:SearchInputCtrl#init
         * @methodOf docanalyser.controller:SearchInputCtrl
         * @description Initialization stuff. Load the stored cooccs hash.
         */
        $scope.init = function () {
            LocalStorageService.loadCooccs();
            $scope.cooccs = LocalStorageService.getCooccs();
        };
        /** End Angular Functions */

        $scope.init();
    }
);

/**
 * @ngdoc controller
 * @name docanalyser.controller:FooterCtrl
 * @description Controller responsible for displaying alerts and other information at the bottom of the webpage.
 * @property {boolean} showWarning:boolean Specifies whether to display a warning.
 * @property {String} warningDiv:String Content of the warning
 */
app.controller('FooterCtrl', function ($scope, $cookies, FooterService) {

    $scope.showWarning = FooterService.getShowWarning();
    $scope.warningDiv = FooterService.getWarningDiv();

    /* Cookie warning */
    /**
     * @ngdoc function
     * @name docanalyser.controller:FooterCtrl#setCookieValue
     * @methodOf docanalyser.controller:FooterCtrl
     * @description The user has consented to the use of cookies.
     * An appropriate cookie is set for the page to remember this decision.
     * @params {String} value 'agreed' string
     */
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

    /**
     * @ngdoc function
     * @name docanalyser.controller:FooterCtrl#hasAgreed
     * @methodOf docanalyser.controller:FooterCtrl
     * @description Check if the user has consented to the use of cookies.
     * @returns {boolean} true if yes
     */
    $scope.hasAgreed = function () {
        var agreementCookie = $cookies.get('agreement');
        return (angular.isDefined(agreementCookie) && agreementCookie === 'agreed'); // cookie must be set
    };
    /* End Cookie warning */

    $scope.hideWarning = function () {
        FooterService.hideWarning();
    }

});

/**
 * @ngdoc controller
 * @name docanalyser.controller:TranslateCtrl
 * @description Handles the translation through a 'translate'-filter.
 * @property {boolean} enLanguage:boolean Indicates whether the interface is English.
 */
app.controller('TranslateCtrl', function ($translate, $scope, LanguageService) {

    $scope.enLanguage = true;
    LanguageService.setLanguage("en");

    $scope.changeLanguage = function () {
        if ($scope.enLanguage) {
            $scope.enLanguage = false;
            $translate.use("de");
            LanguageService.setLanguage("de");
        }
        else {
            $scope.enLanguage = true;
            $translate.use("en");
            LanguageService.setLanguage("en");
        }
    };

});

/** End Angular Controllers */

/** Angular Run Block */

app.run(['$rootScope', function ($rootScope) {

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
