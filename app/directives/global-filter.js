module.exports = [
    '_',
    'GlobalFilter',
function(
    _,
    GlobalFilter
) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            post: '='
        },
        templateUrl: 'templates/partials/global-filter.html',
        link: function($scope, $element, $attrs) {
            $scope.global_filter = GlobalFilter;

            $scope.$watch('global_filter.tags.results', function(newTags, oldTags, scope) {
                GlobalFilter.selected_tags = _.where(newTags, { selected: true });
            }, true);
        },
    };
}];
