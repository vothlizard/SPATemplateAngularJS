var inspectionApp = angular.module('inspectionApp', ['ngRoute', 'kendo.directives', 'afOAuth2', 'officeLinkProxyModule', 'officeLinkLoggingModule', 'officeLinkUserModule']);
// main module config block
inspectionApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'Main/Main',
            controller: 'ctrlMain'            
        });

        $routeProvider.when('/DataCapture', {
            templateUrl: 'Main/DataCapture',
            controller: 'ctrlDataCapture'
        });

        $routeProvider.when('/Sketch', {
            templateUrl: 'Main/Sketch',
            controller: 'ctrlSketch'
        });
      
        $routeProvider.otherwise({
            redirectTo: '/'
        });
}]);

// main module run block
inspectionApp.run(function ($rootScope, $location, UtilitiesService, AccessToken) {
    $rootScope.Util = UtilitiesService;
});
