planeTicketsApp.directive('modalConfirm', function() {
    return {
        templateUrl: 'assets/js/core/directives/templates/modal-confirm.html',
        scope: {
            label: "@",
            modalAction: "&",
            modalOpen: "="
        },
        controller: function($scope) {
            $scope.modalOpen = false;
        },
        transclude: true,
        restrict: 'A'
    }
});