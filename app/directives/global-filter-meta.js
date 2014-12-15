module.exports = [
    'Config',
function(
    Config
) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            posts:  '='
        },
        templateUrl: 'templates/partials/global-filter-meta.html',
        link: function(scope, element, attrs)
        {
            scope.config = Config;
        }
    };
}];
