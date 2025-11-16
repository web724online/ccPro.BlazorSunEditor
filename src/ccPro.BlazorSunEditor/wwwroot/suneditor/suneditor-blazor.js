window.SunEditorInterop = {
    create: function (elementId, dotNetRef, options) {
        const defaultOptions = {
            presets: 'classic'
        };

        const finalOptions = Object.assign({}, defaultOptions, options || {});
        const editor = SUNEDITOR.create(elementId, finalOptions);

        if (finalOptions.initialContent) {
            editor.setContents(finalOptions.initialContent);
        }

        editor.onChange = function (contents) {
            dotNetRef.invokeMethodAsync("OnContentChanged", contents);
        };
    }
};
