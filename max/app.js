 
        var myapp=angular.module('myapp',['appservices']);
        myapp.controller('personController', function($scope,StoreServices)
                         {
                        $scope.name="JhonDee";
                        $scope.loadMe=function(){
                        return StoreServices.loadWeatherData;
                        
                        }
                            
                                                
                        }});

//myapp.controller("masterCtrl",['PeopleService',function(PeopleService){
//    StoreServices.loadWeatherData().then(function(people){
//        $scope.citys = people.list;
//    });
//}]);