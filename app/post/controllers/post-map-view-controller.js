module.exports = [
    '$scope',
    'PostEndpoint',
function(
    $scope,
    PostEndpoint
) {

    $scope.title = 'Map View';

    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        },
        center: {
            lat: 36.079868,
            lng: -79.819416,
            zoom: 4
        },
        markers: {
            osloMarker: {
                lat: 36.079868,
                lng: -79.819416,
                focus: true,
                draggable: false
            }
        }
    });

    $scope.posts = PostEndpoint.query();

}];
