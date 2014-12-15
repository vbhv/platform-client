module.exports = [
    '$scope',
    'Config',
function(
    $scope,
    Config
) {

    // toggle tabs/tab content when clicking show/hide text
    $scope.globalFilterTabs = false;
    $scope.toggle = function(param) {
        $scope[param] = $scope[param] === false ? true : false;
    };

    $scope.config = Config;

}];
