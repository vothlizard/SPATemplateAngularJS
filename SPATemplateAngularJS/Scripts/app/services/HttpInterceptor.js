inspectionApp.config(['$httpProvider', function ($httpProvider) {
    /**
     * this interceptor uses the application logging service to
     * log server-side any errors from $http requests
     */
    $httpProvider.interceptors.push([
        '$rootScope', '$q', '$injector', '$location', 'applicationLoggingService',
        function ($rootScope, $q, $injector, $location, applicationLoggingService) {

            return {
                'request': function (config) {
                    return config;
                },
                'requestError': function (rejection) {
                    return $q.reject(rejection);
                },
                'response': function (response) {
                    if (response.status === null || response.status === 500 || response.status === 400 || response.status === 404) {
                        var error = {
                            method: response.config.method,
                            url: response.config.url,
                            message: response.data,
                            status: response.status
                        };
                        applicationLoggingService.error(JSON.stringify(error));
                    }
                    return response;
                },
                'responseError': function (rejection) {
                    if (rejection.status === null || rejection.status === 500 || rejection.status === 400 || rejection.status === 404 || rejection.status === 0) {
                        var error = {
                            method: rejection.config.method,
                            url: rejection.config.url,
                            message: rejection.data,
                            status: rejection.status
                        };
                        applicationLoggingService.error(JSON.stringify(error));
                        //toaster.pop('error', "Failed to load:", 'Call to ' + error.url + '\n' + error.message.Message);
                    }
                    return $q.reject(rejection);
                }
            };
        }
    ]);
}]);