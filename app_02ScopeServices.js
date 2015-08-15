var myApp = angular.module('myApp', []);

myApp.controller('mainController',function($scope, $filter) {
    
    $scope.handle = ''
   
    $scope.lowercasehandlefunction = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    
    
    
});

