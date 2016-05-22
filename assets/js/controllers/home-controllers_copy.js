planeTicketsApp.controller('MainController', ['$scope', '$http',
    function($scope, $http) {
        // Get clients List & Flies list
        // @ à transformer en service ?
        $http({
            method: 'GET',
            url: 'assets/js/planes.json'
        }).then(function successFlies(response) {
            // response = JSON.parse(response);
            $scope.flies = response.data.flies;
            // console.log($scope.flies);
            $scope.clients = response.data.clients;
            // console.log($scope.clients);

        }, function errorFlies(response) {

            console.log('Erreur de lecture');

        });


        // Fonction pour ajouter des clients
        // @ à transformer en service ?
        // 
        // Déclaration des variables
        // localStorage.removeItem("newClients");
        $scope.formClient = {};


        // Détection des newClients dans localStorage
        if (typeof localStorage != 'undefined') {
            // Récupération de la valeur dans web storage
            $scope.newClients = localStorage.getItem('newClients');
            // Vérification de la présence de newClients
            if ($scope.newClients != null) {
                // Si oui, on convertit en tableau d'objets la chaîne de texte qui fut stockée
                $scope.newClients = JSON.parse($scope.newClients);
                console.log($scope.newClients);
            } else {
                $scope.newClients = [];
            }
        } else {
            $scope.newClients = [];
        }


        // Add newClients
        $scope.addClients = function() {
            var newClient = {
                name: $scope.formClient.name,
                surname: $scope.formClient.surname,
                phone: $scope.formClient.phone,
                email: $scope.formClient.email,
                fly: $scope.formClient.fly
            }
            $scope.newClients.push(newClient);
            localStorage.setItem("newClients", JSON.stringify($scope.newClients));
        };


        // Delete Client
        $scope.delCLient = function(index) {
            $scope.newClients.splice(index, 1);
            localStorage.setItem("newClients", JSON.stringify($scope.newClients));
        };


        // Edit Clientemail  
        // Envoyer les données du client vers le formulaire   
        $scope.editClients = function(index, name, surname, phone, email, fly) {
            $scope.formClient.id = index;
            $scope.formClient.name = name;
            $scope.formClient.surname = surname;
            $scope.formClient.phone = phone;
            $scope.formClient.email = email;
            $scope.formClient.fly = fly;
        }

        $scope.saveClient = function() {
            $scope.newClients[$scope.formClient.id] = $scope.formClient;
            localStorage.setItem("newClients", JSON.stringify($scope.newClients));
            console.log($scope.newClients);
        }
    }
]);