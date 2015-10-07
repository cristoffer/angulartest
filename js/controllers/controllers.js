(function () {
    var module = angular.module('app-controllers', []);

    module.controller('ListCtrl', ['$scope', 'httpService', 'friends', function ($scope, service, friends) {

        $scope.List = friends;

        $scope.removeFriend = function (id) {
            service.removeFriend(id).then(function (response) {
                $scope.List = _.reject($scope.List, function (item) { return item.id === id });
            });
        }

    } ]);

    module.controller('DetailsCtrl', ['$scope', 'httpService', 'friend', function ($scope, service, friend) {
        $scope.friend = friend;
    } ]);

})();

