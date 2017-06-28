angular
    .module('app')
    .config(function($locationProvider, $routeProvider){
        
        $locationProvider.html5Mode({enabled: true});

        $routeProvider
            .when("/", {
                template: "<calendar></calendar>"
            });
    })