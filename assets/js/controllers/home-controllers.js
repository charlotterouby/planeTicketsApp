planeTicketsApp.controller('MainController', ['$scope', 'ClientsFactory', 'FliesFactory',
    function($scope, clientsFactory, fliesFactory) {
        // Initialisation variables $scope.newClients et $scope.flies
        if (typeof localStorage != 'undefined') {
            // Récupération de la valeur dans web storage
            $scope.newClients = localStorage.getItem('newClients');
            $scope.flies = localStorage.getItem('flies');

            // Vérification de la présence de newClients
            if ($scope.newClients != null) {
                // Si oui, on convertit en tableau d'objets la chaîne de texte qui fut stockée
                $scope.newClients = JSON.parse($scope.newClients);
            } else {
                $scope.newClients = clientsFactory.getListClients().then(function(clients) {
                    $scope.newClients = clients;
                }, function(msg) {
                    alert(msg);
                });
            }

            // Vérification de la présence de flies
            if ($scope.flies != null) {
                // Si oui, on convertit en tableau d'objets la chaîne de texte qui fut stockée
                $scope.flies = JSON.parse($scope.flies);
            } else {
                $scope.flies = fliesFactory.getListFlies().then(function(flies) {
                    $scope.flies = flies;
                }, function(msg) {
                    alert(msg);
                });
            }

        } else {
            // Sinon aller chercher les valeurs dans le json
            $scope.newClients = clientsFactory.getListClients().then(function(clients) {
                $scope.newClients = clients;
            }, function(msg) {
                alert(msg);
            });
            console.log($scope.newClients);

            $scope.flies = fliesFactory.getListFlies().then(function(flies) {
                $scope.flies = flies;
            }, function(msg) {
                alert(msg);
            });
        }

        //Clients
        $scope.formClient = {}; //Variable pour stockage temporaire du formulaire ajout/édition de clients
        $scope.addClients = function() { //Ajouter
            $scope.newClients = clientsFactory.addClient($scope.formClient, $scope.newClients);
        }
        $scope.delClients = function(index) { //Supprimer
            $scope.newClients = clientsFactory.delCLient(index, $scope.newClients);
        }
        $scope.editClients = function(index) { //Editer
            $scope.formClient = clientsFactory.editClient(index, $scope.newClients);
        }
        $scope.saveClients = function() { //Sauvegarde des infos de l'édition
            $scope.newClients = clientsFactory.saveClient($scope.formClient, $scope.newClients);
        }

        //Flies
        $scope.formFly = {}; //Variable pour stockage temporaire du formulaire ajout/édition de vols
        $scope.addFlies = function() { //Ajouter
            $scope.flies = fliesFactory.addFly($scope.formFly, $scope.flies);
        }
        $scope.delFlies = function(index) { //Supprimer
            $scope.flies = fliesFactory.delFly(index, $scope.flies);
        }
        $scope.editFlies = function(index) { //Editer
            $scope.formFly = fliesFactory.editFly(index, $scope.flies);
        }
        $scope.saveFlies = function() { //Sauvegarde des infos de l'édition
            $scope.flies = fliesFactory.saveFly($scope.formFly, $scope.flies);
        }

    }
]);