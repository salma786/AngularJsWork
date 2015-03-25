//describe('Java scrit Caluclator',function(){
//
//it('aading two numbers',function(){
//
//    expect(2+3).toEqual(5);
//    
//});
//    
//    it('Multiplyingtwonumbers',function(){
//    
//    expect(2*3).toEqual(6);
//    });
//    
//    
//});


describe('MyController spec', function() {

    beforeEach(module('starter'));
    it('should welcomemessage', inject(function($controller) {

        var scope = {};
        ctrl = $controller('MyController', {
            $scope: scope
        });
        expect(scope.hello).toEqual('Welcome message');



    }));

});

describe('Our cluclators service', function() {

    var services;
    beforeEach(module('appservices'));
    beforeEach(inject(function(Calculator) {
        services = Calculator;
    }));

    describe('Should eddition', function() {
        it('What is the edition of two num', function() {

            expect(services.addition(13, 14)).toEqual(26);

        });

    });

    
    describe('Shouldtoday date is',function(){
    it('Whatistoday date equals',function(){
    
        expect(services.getDate()).toEqual('13-2');
    });
    
        
    });

});