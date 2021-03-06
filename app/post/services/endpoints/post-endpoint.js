module.exports = [
    '$resource',
    '$rootScope',
    'Util',
    '_',
function (
    $resource,
    $rootScope,
    Util,
    _
) {

    var PostEndpoint = $resource(Util.apiUrl('/posts/:id/:extra'), {
        id: '@id'
    }, {
        query: {
            method: 'GET',
            isArray: false
        },
        get: {
            method: 'GET',
            transformResponse: function (data /*, header*/) {
                data = angular.fromJson(data);
                // Ensure values is always an object
                if (_.isArray(data.values)) {
                    data.values = _.object(data.values);
                }
                return data;
            }
        },
        update: {
            method: 'PUT'
        },
        options: {
            method: 'OPTIONS'
        },
        geojson: {
            method: 'GET',
            url: Util.apiUrl('/posts/:id/geojson'),
            isArray: false
        },
        stats: {
            method: 'GET',
            url: Util.apiUrl('/posts/:id/stats'),
            isArray: false
        }
    });

    $rootScope.$on('event:authentication:logout:succeeded', function () {
        PostEndpoint.query();
    });

    return PostEndpoint;

}];
