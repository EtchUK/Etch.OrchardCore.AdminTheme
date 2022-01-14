﻿/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function makeRelative(url) {
    return url.replace(window.location.protocol + '//' + window.location.host, "");
}

//variables used in FlowPart.Edit sortable
var widgetDragItem, lastContainer, widgetItemSourceId, widgetItemDestId;
$(function () {
    $(document).on('click', '.add-widget', function (event) {
        var type = $(this).data("widget-type");
        var targetId = $(this).data("target-id");
        var htmlFieldPrefix = $(this).data("html-field-prefix");
        var createEditorUrl = $('#' + targetId).data("buildeditorurl");
        var prefixesName = $(this).data("prefixes-name");
        var flowmetadata = $(this).data("flowmetadata");
        var parentContentType = $(this).data("parent-content-type");
        var partName = $(this).data("part-name"); // Use a prefix based on the items count (not a guid) so that the browser autofill still works.

        // Retrieve all index values knowing that some elements may have been moved / removed.
        var indexes = $('#' + targetId).closest("form").find("input[name*='Prefixes']")
            .filter(function (i, e) {
                return $(e).val().substring(0, $(e).val().lastIndexOf('-')) === htmlFieldPrefix;
            })
            .map(function (i, e) {
                return parseInt($(e).val().substring($(e).val().lastIndexOf('-') + 1)) || 0;
            });

        // Use a prefix based on the items count (not a guid) so that the browser autofill still works.
        var index = indexes.length ? Math.max(...indexes) + 1 : 0;
        var prefix = htmlFieldPrefix + '-' + index.toString();

        var contentTypesName = $(this).data("contenttypes-name");
        var contentItemsName = $(this).data("contentitems-name");

        $.ajax({
            url: createEditorUrl + "?id=" + type + "&prefix=" + prefix + "&prefixesName=" + prefixesName + "&contentTypesName=" + contentTypesName + "&contentItemsName=" + contentItemsName + "&targetId=" + targetId + "&flowmetadata=" + flowmetadata + "&parentContentType=" + parentContentType + "&partName=" + partName
        }).done(function (data) {
            var renderScripts = function () {
                if (this.src) {
                    if ($('script[src="' + makeRelative(this.src) + '"]').length === 0) {
                        $(document.getElementById(targetId)).append(this);
                    }

                    return;
                }

                $.globalEval(this.text || this.textContent || this.innerHTML || '');
            };

            var result = JSON.parse(data);

            $(result.Stylesheets).filter('link').each(function () {
                if ($('link[href="' + makeRelative(this.href) + '"]').length === 0) {
                    $(document.getElementById(targetId)).append(this);
                }
            });

            $(result.Header).filter('script').each(renderScripts);
            $(document.getElementById(targetId)).append(result.Content);
            $(result.Footer).filter('script').each(renderScripts);
        });
    });
    $(document).on('click', '.insert-widget', function (event) {
        var type = $(this).data("widget-type");
        var target = $(this).closest('.widget-template');
        var targetId = $(this).data("target-id");
        var htmlFieldPrefix = $(this).data("html-field-prefix");
        var createEditorUrl = $('#' + targetId).data("buildeditorurl");
        var flowmetadata = $(this).data("flowmetadata");
        var prefixesName = $(this).data("prefixes-name");
        var parentContentType = $(this).data("parent-content-type");
        var partName = $(this).data("part-name");

        // Retrieve all index values knowing that some elements may have been moved / removed.
        var indexes = $('#' + targetId).closest("form").find("input[name*='Prefixes']")
            .filter(function (i, e) {
                return $(e).val().substring(0, $(e).val().lastIndexOf('-')) === htmlFieldPrefix;
            })
            .map(function (i, e) {
                return parseInt($(e).val().substring($(e).val().lastIndexOf('-') + 1)) || 0;
            });

        // Use a prefix based on the items count (not a guid) so that the browser autofill still works.
        var index = indexes.length ? Math.max(...indexes) + 1 : 0;
        var prefix = htmlFieldPrefix + '-' + index.toString();

        var contentTypesName = $(this).data("contenttypes-name");
        var contentItemsName = $(this).data("contentitems-name");

        $.ajax({
            url: createEditorUrl + "?id=" + type + "&prefix=" + prefix + "&prefixesName=" + prefixesName + "&contentTypesName=" + contentTypesName + "&contentItemsName=" + contentItemsName + "&targetId=" + targetId + "&flowmetadata=" + flowmetadata + "&parentContentType=" + parentContentType + "&partName=" + partName
        }).done(function (data) {
            var renderScripts = function () {
                if (this.src) {
                    if ($('script[src="' + makeRelative(this.src) + '"]').length === 0) {
                        $(this).insertBefore(target)
                    }

                    return;
                }

                $.globalEval(this.text || this.textContent || this.innerHTML || '');
            };

            var result = JSON.parse(data);

            $(result.Stylesheets).filter('link').each(function () {
                if ($('link[href="' + makeRelative(this.href) + '"]').length === 0) {
                    $(this).insertBefore(target);
                }
            });

            $(result.Header).filter('script').each(renderScripts);
            $(result.Content).insertBefore(target);
            $(result.Footer).filter('script').each(renderScripts);
        });
    });
    $(document).on('click', '.widget-delete', function () {
        var $this = $(this);
        confirmDialog(_objectSpread(_objectSpread({}, $this.data()), {}, {
            callback: function callback(r) {
                if (r) {
                    $this.closest('.widget-template').remove();
                    $(document).trigger('contentpreview:render');
                }
            }
        }));
    });
    $(document).on('change', '.widget-editor-footer label, .widget-editor-header label', function () {
        var $tmpl = $(this).closest('.widget-template');
        var $radio = $(this).find("input:first-child");

        if ($radio[0].id !== 'undefined' && $radio[0].id.indexOf('Size') > 0) {
            var $radioSize = $(this).find("input:first-child").val();
            var classList = $tmpl.attr('class').split(' ');
            $.each(classList, function (id, item) {
                if (item.indexOf('col-md-') === 0) $tmpl.removeClass(item);
            });
            var colSize = Math.round($radioSize / 100 * 12);
            $tmpl.addClass('col-md-' + colSize);
            var dropdown = $(this).closest('.dropdown-menu');
            dropdown.prev('button').text($radioSize + '%');
        } else if ($radio[0].id !== 'undefined' && $radio[0].id.indexOf('Alignment') > 0) {
            var svg = $(this).find('svg')[0].outerHTML;
            var alignDropdown = $(this).closest('.dropdown-menu');
            var $btn = alignDropdown.prev('button');
            $btn.html(svg);
        }

        $(document).trigger('contentpreview:render');
    });
    $(document).on('click', '.widget-editor-btn-toggle', function () {
        $(this).closest('.widget-editor').toggleClass('collapsed');
    });
    $(document).on('keyup', '.widget-editor-body .form-group input.content-caption-text', function () {
        var headerTextLabel = $(this).closest('.widget-editor').find('.widget-editor-header:first .widget-editor-header-text');
        var contentTypeDisplayText = headerTextLabel.data('content-type-display-text');
        var title = $(this).val();
        var newDisplayText = title + ' ' + contentTypeDisplayText;
        headerTextLabel.text(newDisplayText);
    });
});