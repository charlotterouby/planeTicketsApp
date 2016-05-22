planeTicketsApp.directive('listFlies', function() {
    return {
        templateUrl: 'assets/js/core/directives/templates/list-flies.html',
        scope: {
            fliesList: "=",
            editFly: "&",
            deleteFly: "&"
        },
        restrict: 'A'
    }
});