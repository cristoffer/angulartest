angular.module('app', [
	'ui.router',
    'app-controllers',
    'http-service',
    'directives'

]).run(['$rootScope', function ($rootScope) {
    $rootScope.serviceUrl = "http://private-06bf0-collaborationgrouptest.apiary-mock.com/";
    $rootScope.loader = true;
}
]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
			.when('', '/start')
			.otherwise('/start');

    $stateProvider
        	.state('start', {
        	    url: '/start',
        	    templateUrl: 'templates/ListPage.html',
        	    controller: 'ListCtrl',
        	    resolve: {
        	        friends: ['httpService', '$stateParams', function (service, $stateParams) {
        	            return service.getFriends();
        	        } ]
        	    }
        	})
            .state('details', {
                url: '/details/{id}',
                //params: {id:null},
                templateUrl: 'templates/detailsPage.html',
                controller: 'DetailsCtrl',
                resolve: {
                    friend: ['httpService', '$stateParams', function (service, $stateParams) {
                        return service.getFriend($stateParams.id);
                    } ]
                }
            });
}
]);