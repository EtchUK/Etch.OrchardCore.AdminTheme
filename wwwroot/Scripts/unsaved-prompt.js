$(function () {
    var hasUnsavedChanges = false;

    var setUnsavedChanges = function () {
        hasUnsavedChanges = true;
    };

    $(document)
        .on('input', '.content-preview-text', setUnsavedChanges)
        .on('propertychange', '.content-preview-text', setUnsavedChanges)
        .on('keyup', '.content-preview-text', function (event) {
            // handle backspace
            if (event.keyCode === 46 || event.ctrlKey) {
                hasUnsavedChanges = true
            }
        })
        .on('change', '.content-preview-select', setUnsavedChanges);

    $('form').on('submit', function () {
        hasUnsavedChanges = false;
    });

    $(window).on("beforeunload", function (e) {
        if (!hasUnsavedChanges) {
            return undefined;
        }

        return true;
    });
});