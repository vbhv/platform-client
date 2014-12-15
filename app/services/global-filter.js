module.exports = [
    'TagEndpoint',
    'Util',
function(
    TagEndpoint,
    Util
) {

    var GlobalFilter = {
        tags: TagEndpoint.get(),
        selected_tags: []
    };

    return Util.bindAllFunctionsToSelf(GlobalFilter);

}];
