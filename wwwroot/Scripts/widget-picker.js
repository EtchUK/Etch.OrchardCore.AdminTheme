(function () {
    var $categoryPickers = document.querySelectorAll('.widget-picker-categories .nav-item');

    var applyFilter = function (category, term) {
        var $widgets = document.querySelectorAll('.js-flow-widget');

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

    document.querySelector('.modal-widgets input[type=search]').addEventListener('keyup', function (e) {
        applyFilter(null, e.target.value);
    });
})();