// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope','$log','$filter', function ($scope,$log,$filter) {



    
    
// Dit is de LOG SERVICE($log) (wordt automatisch weg geschreven in console.log    
$log.log("Hallo");
$log.info("Dit is mijn App");
$log.warn("Dit is een waarschuwing");
$log.error("Dit is een error");

    
    $scope.name = "Erik";
    $scope.name.lastName = "van der Hoeven";
    
}]);


var findPerson = function (voornaam, achternaam, adres) {

    return "Erik van der Hoeven";

};


