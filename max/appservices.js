var storeServices=angular.module('appservices',[]);
storeServices.factory('StoreServices',function($http)
                      {
   var operations={};
    operations.load=function()
    {
        alert("Hello i am from service");
    }
    
    operations.loadWeatherData=function()
    {
        
        var res;
        $http.get("http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10").success(function(responce)
                  {
            var citys;
            
            alert("done"+responce.list[0].name);
            citys=responce.list;
            return citys;
//            res=responce.list;
//            return responce.list;
        });
        
//        return res;
        
        
    };
    
    
    return operations;
    
});