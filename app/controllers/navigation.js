module.exports = [
    '$scope',
    'Authentication',
    'Config',
function(
    $scope,
    Authentication,
    Config
) {

    $scope.mainMenu = false;
    $scope.config = Config;

    $scope.toggle = function(param) {
        $scope[param] = $scope[param] === false ? true : false;
    };

    $scope.signoutClick = function(){
        event.preventDefault();
        event.stopPropagation();
        Authentication.signout();
    };

}];
