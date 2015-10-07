(function () {

    var module = angular.module('http-service', []);

    module.service('httpService', ['$http', '$rootScope', function ($http, $rootScope) {
        var friendsUri = $rootScope.serviceUrl + "friends";
        return ({
            getFriends: getFriends,
            getFriend: getFriend,
            removeFriend: removeFriend
        });

        function getFriend(id) {
            showLoader();
            return $http({
                method: 'GET',
                url: friendsUri + '/' + id
            }).then(function successCallback(response) {
                hideLoader();
                return response.data;
            }, function errorCallback(response) {
                hideLoader();
                alert("friend not found");
            });
        }

        function getFriends() {
            showLoader();
            return $http({
                method: 'GET',
                url: friendsUri
            }).then(function successCallback(response) {
                hideLoader();
                return response.data;
            }, function errorCallback(response) {
                hideLoader();
                alert("friend not found");
            });
        }

        function removeFriend(id) {
            showLoader();
            return $http({
                method: 'DELETE',
                url: friendsUri + '/' + id
            }).then(function successCallback(response) {
                hideLoader();
                return response;
            }, function errorCallback(response) {
                hideLoader();
                alert("friend not found");
            });
        }

        function showLoader() {
            $rootScope.loading = true;
        }

        function hideLoader() {
            $rootScope.loading = false;
        }

    } ]);

})();