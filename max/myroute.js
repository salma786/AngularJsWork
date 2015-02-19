var myapp= angular.module("sampleapp",['ngRoute']);
myapp.config( function($routeProvider)
             {   
    
    $routeProvider
    .when('/apple',{
    templateUrl:"templates/apple.html",
    contoller:"AppleController"
    
    })
    .when('/banana',{templateUrl:"templates/banana.html",
                    controller:"BananaController"
                    })
//    .otherwise({
//        templateUrl:"templates/fruits.html",
//        controller:"FruitController"
//        
//    })
    
});

myapp.controller('FruitController',function($scope)
                 {
            $scope.fruits=[{name:'apple'},{name:'banana'}];
                     });


myapp.controller('AppleController',function($scope)
                 {
    $scope.name='I am apple';
    
                    });

myapp.controller('BananaController',function($scope)
                 {
    $scope.name='I am banana';
    
                    });