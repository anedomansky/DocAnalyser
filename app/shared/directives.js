var app = angular.module('myApp', []);

app.directive('resizable', function ($window) {
    return function ($scope) {

        $scope.leftMenu = document.getElementById('menu');
        $scope.scrollbarWidth = getScrollbarWidth($scope.leftMenu);
        $scope.scrollbarWidth = Math.round($scope.scrollbarWidth) * 2; // we have 2 scrollbars

        /** Functions */

        /* get browser default scrollbar width */
        function getScrollbarWidth(element) {
            return element.getBoundingClientRect().width - element.scrollWidth;
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
        return angular.element($window).bind('resize', function() {
            //$scope.onResizeFunction();
            //return $scope.safeApply();
            $scope.resize();
        });

    };
});