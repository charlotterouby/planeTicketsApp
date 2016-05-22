planeTicketsApp.directive('formAddClient', function() {
    return {
        templateUrl: 'assets/js/core/directives/templates/form-add-client.html',
        scope: {
            addNewClient: "=",
            fliesList: "=",
            formAddAction: "&"
        },
        restrict: 'A'
    }
});