angular.module('userProfiles').controller('MainController', function($scope, mainService){

        $scope.getUsers = mainService.getUsers()

})
