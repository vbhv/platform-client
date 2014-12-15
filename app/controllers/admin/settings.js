module.exports = [
    '$scope',
    '$translate',
    'Config',
function(
    $scope,
    $translate,
    Config
) {

    $scope.config = Config;

    $translate('settings.admin_settings').then(function(settingsTranslation){
        $scope.title = settingsTranslation;
    });

}];
