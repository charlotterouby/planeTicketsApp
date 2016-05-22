planeTicketsApp.directive('listUsers', function() {
    return {
        templateUrl: 'assets/js/core/directives/templates/list-users.html',
        scope: {
            usersList: "=",
            editUser: "&",
            deleteUser: "&"
        },
        restrict: 'A'
    }
});