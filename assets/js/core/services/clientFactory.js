planeTicketsApp.factory('ClientsFactory', ['$http', '$q',
    function($http, $q) {
        var clients = {
            clientsList: false,
            'getListClients': function() {
                var deffered = $q.defer();
                $http.get('assets/js/planes.json').success(
                    function(data) {
                        clients.clientsList = data.clients;
                        deffered.resolve(clients.clientsList);
                    }
                ).error(
                    function(data) {
                        deffered.reject('Erreur de récupération du json');
                    }
                );
                return deffered.promise;
            },
            'addClient': function(formClient, clients) { // ajouter un client
                var clients = clients;
                var newClient = {
                    name: formClient.name,
                    surname: formClient.surname,
                    phone: formClient.phone,
                    email: formClient.email,
                    fly: formClient.fly
                }
                clients.push(newClient);
                localStorage.setItem("newClients", JSON.stringify(clients));
                return clients;
            },
            'delCLient': function(index, clients) { // supprimer un client
                var clients = clients;
                clients.splice(index, 1);
                localStorage.setItem("newClients", JSON.stringify(clients));
                return clients;
            },
            'editClient': function(index, clients) { // Envoyer les données du client vers le formulaire  
                var clients = clients;
                var formClient = {
                    id: index,
                    name: clients[index].name,
                    surname: clients[index].surname,
                    phone: clients[index].phone,
                    email: clients[index].email,
                    fly: clients[index].fly
                };
                return formClient;
            },
            'saveClient': function(formClient, clients) { // sauvegarde des nouvelles infos du client éditer
                var clients = clients;
                clients[formClient.id] = formClient;
                localStorage.setItem("newClients", JSON.stringify(clients));
                return clients;
            }
        }
        return clients;
    }
]);