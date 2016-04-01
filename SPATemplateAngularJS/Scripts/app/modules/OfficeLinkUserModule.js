(function () {
    function getUserInfoJWT($window) {
        var tokenString = $window.sessionStorage.getItem('userInfoJWT');
        var token = null;
        if (tokenString) {
            token = JSON.parse(tokenString);
        }
        return token;
    }

    angular.module('rmsaccess.userprofile', []).factory('userprofile', ['$rootScope','$window', function ($rootScope, $window) {
        var service = {
            userProfile: null
        };

        service.get = function () {
            // set defaults if none is provided from UserInfo endpoint.
            this.userProfile.defaultLanguage = this.userProfile.defaultLanguage || 'E';
            this.userProfile.email = this.userProfile.email || 'gn_admin@tempuri.org';

            return this.userProfile;
        };

        service.set = function () {
            service.userProfile = getUserInfoJWT($window);

            if (service.userProfile === undefined) {
                service.userProfile = null;
            }

            if (service.userProfile !== null && service.userProfile.sub) {
                $rootScope.$broadcast('rmsaccess:userInfoSuccess');
            }

            return service.userProfile;
        };

        service.destroy = function () {
            $window.sessionStorage.setItem('userInfoJWT', null);
            service.userProfile = null;
        };

        return service;
    }]);

    angular.module('rmsaccess.endpoint', ['oauth2.accessToken']).factory('UserInfoEndpoint', ['$http', '$window', 'AccessToken', 'userprofile', function ($http, $window, accessToken, userprofile) {
        var service = {
            get: function () {
                $http({
                    method: 'GET',
                    url: service.url,
                    headers: {
                        'Authorization': 'Bearer' + accessToken
                    },
                }).success(function (data) {
                    if (data) {
                        $window.sessionStorage.setItem('userInfoJWT', JSON.stringify(data));
                        userprofile.set();
                    }
                }).error(function (data) {
                    var x = 0;
                });
            }
        };

        service.init = function (params) {
            service.url = params.userinfoUrl + '?' +
                'scope=' + encodeURIComponent(params.scope);
        };

        return service;

    }])

    angular.module('rmsaccess.directive', []).directive('userInfo', ['$compile', '$window', 'UserInfoEndpoint', function ($compile, $window, userInfoEndpoint) {
        var definition = {
            restrict: 'E',
            scope: {
                userinfoUrl: '@', 
                scope: '@'			
            }
        };

        definition.link = function (scope, element, attrs) {
            function compile() {
                var tag = '<p class="navbar-text" style="color: #ffffff;margin-bottom:5px;margin-top:5px">Signed in as {{ UserName }}</p>';
                element.html(tag);
                $compile(element.contents())(scope);
            };

            function init() {
                scope.userInfoUrl = scope.userinfoUrl || '';
                compile();
                userInfoEndpoint.init(scope);
            };

            scope.$on('oauth2:authSuccess', function () {
                init();
                userInfoEndpoint.get();
            });

            scope.$on('rmsaccess:userInfoSuccess', function () {
                var data = getUserInfoJWT($window);
                scope.UserName = data.email;
            });
        };
        return definition;
    }]);

    angular.module('officeLinkUserModule', [
         'rmsaccess.directive',
         'rmsaccess.userprofile',
         'rmsaccess.endpoint'
    ]);
})();