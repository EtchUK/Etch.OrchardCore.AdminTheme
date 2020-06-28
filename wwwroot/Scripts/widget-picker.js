(function () {
    window.initialisedPickers = [];

    window.displayPicker = function ($picker) {
        if (window.initialisedPickers.indexOf($picker) >= 0) {
            return;
        }

        window.initialisedPickers.push($picker);

        var $categoryPickers = $picker.querySelectorAll('.widget-picker-categories .nav-item');

        var applyFilter = function (category, term) {
            var $widgets = document.querySelectorAll('.js-flow-widget')

            category = category || document.querySelectorAll('.widget-picker-categories .nav-link.active')[0].getAttribute('href').substr(1);
            term = term || document.querySelector('.modal-widgets input[type=search]').value;

            $widgets.forEach(function ($widget) {
                if (category !== 'all' && $widget.getAttribute('data-category') !== category) {
                    $widget.classList.add('d-none');
                    return;
                }

                if (term && $widget.innerHTML.toLowerCase().indexOf(term.toLowerCase()) < 0) {
                    $widget.classList.add('d-none');
                    return;
                }

                $widget.classList.remove('d-none');
            });
        };

        var addCategorySelectListeners = function ($el) {
            $el.addEventListener('click', function (e) {
                applyFilter(e.target.getAttribute('href').substring(1));
                return false;
            });
        };

        $categoryPickers.forEach(addCategorySelectListeners);

        var $widgetSearch = $picker.querySelector('input[type=search]');

        if ($widgetSearch) {
            var onSearch = function (e) {
                applyFilter(null, e.target.value);
            };

            $widgetSearch.addEventListener('keyup', onSearch);
            $widgetSearch.addEventListener('search', onSearch);
        }
    };
})();