/*
 * @description - Add common utility functions
 * @example - usage: $rootScope.Util.Flatten(obj)
 */
inspectionApp.factory('UtilitiesService', function () {
    var service = {};

    //.... add common operations

    service.Flatten = function (obj) {
        var result = Object.create(obj);
        for (var key in result) {
            result[key] = result[key];
        }
        return result;
    };

    return service;
});