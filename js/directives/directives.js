(function () {
    var module = angular.module('directives', []);

    module.directive('friendListItem', ['httpService', function (service) {
        return {
            restrict: 'E',
            replace: true,
            scope: { friend: '=', removeFriend: '='},
            template:
                '<div class="container-fluid">'+
                '   <div class="row">'+
                '       <div class="col-xs-10">' +
                '           <a ui-sref="details({id: friend.id})">' +
                '               <div class="row">'+
                '                   <div class="col-xs-2">' +
                '                       <div class="imgContainer">'+
                '                           <img ng-src="{{friend.photo}}" alt="{{friend.name}}">' +
                '                       </div>'+
                '                   </div>' +
                '                   <div class="col-xs-3"><span>{{friend.name}}</span></div>' +
                '                   <div class="col-xs-3"><span>{{friend.status}}</span></div>' +
                '                   <div class="col-xs-4"><span>{{friend.adress}}</span></div>' +
                '               </div>'+
                '           </a>'+
                '       </div>'+
                '       <div class="col-xs-2 pointer" ng-click="removeFriend(friend.id);">' +
                '           <span class="glyphicon glyphicon-trash"></span>' +
                '       </div>' +
                '   </div>'+
                '</div>',
                

            link: function ($scope) {
                /*
                $scope.removeFriend = function (id) {
                    service.removeFriend(id);
                };*/
            }
        }
    } ]);

})();