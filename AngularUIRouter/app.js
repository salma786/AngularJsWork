https://scotch.io/tutorials/angular-routing-using-ui-router
var appModule=angular.module("myapp",['ui.router']);
appModule.config(function($stateProvider,$urlRouterProvider)
                 {
    $urlRouterProvider.otherWise('templates/home');
    
    $stateProvider.state('home',{url:'templates/home',templateUrl:''})
                        .state('about',{url:'/about',templateUrl:''}) 
    
    
    
    })


}
                
                
                )