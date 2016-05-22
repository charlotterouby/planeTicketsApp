planeTicketsApp.factory('FliesFactory', ['$http', '$q',
    function($http, $q) {
        var flies = {
            fliesList: false,
            'getListFlies': function() {
                var deffered = $q.defer();
                $http.get('assets/js/planes.json').success(
                    function(data) {
                        flies.fliesList = data.flies;
                        deffered.resolve(flies.fliesList);
                    }
                ).error(
                    function(data) {
                        deffered.reject('Erreur de récupération du json');
                    }
                );
                return deffered.promise;
            },
            'addFly': function(formFly, flies) { // ajouter un vol
                var flies = flies;
                var newFly = {
                    id: formFly.id,
                    deparLoc: formFly.deparLoc,
                    deparTime: new Date(formFly.deparTime),
                    landLoc: formFly.landLoc,
                    landTime: new Date(formFly.landTime)
                }
                flies.push(newFly);
                localStorage.setItem("flies", JSON.stringify(flies));
                return flies;
            },
            'delFly': function(index, flies) { // supprimer un vol
                var flies = flies;
                flies.splice(index, 1);
                localStorage.setItem("flies", JSON.stringify(flies));
                return flies;
            },
            'editFly': function(index, flies) { // Envoyer les données du vol vers le formulaire  
                var flies = flies;
                var formFly = {
                    index: index,
                    id: flies[index].id,
                    deparLoc: flies[index].deparLoc,
                    deparTime: new Date(flies[index].deparTime),
                    landLoc: flies[index].landLoc,
                    landTime: new Date(flies[index].landTime)
                };
                return formFly;
            },
            'saveFly': function(formFly, flies) { // sauvegarde des nouvelles infos du vol éditer
                var flies = flies;
                flies[formFly.index] = formFly;
                localStorage.setItem("flies", JSON.stringify(flies));
                return flies;
            }
        };
        return flies;
    }
]);