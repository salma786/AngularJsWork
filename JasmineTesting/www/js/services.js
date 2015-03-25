angular.module('appservices', ['ionic', 'angular-momentjs'])
    .factory('Calculator', ['$ionicLoading', '$moment',

        function($ionicLoading, $moment) {

            return {
                addition: function(num1, num2) {
                    return num1 + num2;
                },
                getDate: function() {
                    return new moment();

                }
            }
        }
    ])