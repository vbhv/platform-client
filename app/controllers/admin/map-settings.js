module.exports = [
    '$scope',
    '$translate',
    'PostEndpoint',
    'Config',
function(
    $scope,
    $translate,
    PostEndpoint,
    Config
) {

    $translate('map_settings.admin_map_settings').then(function(mapSettingsTranslation){
        $scope.title = mapSettingsTranslation;
    });

    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        },
        markers: {
            osloMarker: {
                lat: 36.079868,
                lng: -79.819416,
                message: 'Welcome to Greensboro, NC',
                focus: true,
                draggable: false
            }
        }
    });

    $scope.config = Config;
    $scope.posts = PostEndpoint.query();

}];
