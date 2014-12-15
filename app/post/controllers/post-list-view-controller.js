module.exports = [
    '$scope',
    '$translate',
    'PostEndpoint',
    'GlobalFilter',
    '_',
function(
    $scope,
    $translate,
    PostEndpoint,
    GlobalFilter,
    _
) {

    $translate('post.posts').then(function(postsTranslation){
        $scope.title = postsTranslation;
    });

    $scope.posts = PostEndpoint.query();

    $scope.global_filter = GlobalFilter;
    $scope.$watch('global_filter.selected_tags', function(newTags, oldTags, scope) {
        $scope.posts = PostEndpoint.query({
            tags: _.map(newTags, function(t) {
                return t.id;
            })
        });
    });

}];
