var myApp = angular.module('myApp', []); 

//define client side routing
myApp.config(['$routeProvider', function ($routeProvider) { 
    console.log('route config loaded');
    $routeProvider
       .when('/', { 
            templateUrl: 'views/index.html', 
            controller: 'MessageController', 
            controllerAs: 'vm' 
       
        }).otherwise({
            //catch-all
            redirectTo: 'messsages'
        });

}]);


console.log('myApp is loaded', myApp);