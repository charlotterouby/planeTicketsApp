planeTicketsApp.directive('formAddFly', function() {
    return {
        templateUrl: 'assets/js/core/directives/templates/form-add-fly.html',
        scope: {
            addNewFly: "=",
            formAction: "&"
        },
        restrict: 'A'
    }
});