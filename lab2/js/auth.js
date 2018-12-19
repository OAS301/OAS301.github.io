(function($) {
    
    var SHOW_CLASS = 'show',
        HIDE_CLASS = 'hide',
        ACTIVE_CLASS = 'active';
    $('.tabs').on('click', 'li a', function(e) {
        e.preventDefault();
        var $tab = $(this),
            href = $tab.attr('href');
        $('.active').removeClass(ACTIVE_CLASS);
        $tab.addClass(ACTIVE_CLASS);
        $('.show').removeClass(SHOW_CLASS).addClass(HIDE_CLASS).hide();
        $(href).removeClass(HIDE_CLASS).addClass(SHOW_CLASS).hide().fadeIn(620);
    });
})(jQuery);

validator.message['date'] = 'not a real date';

$('form').on('blur', 'input[required], input.optional, select.required', validator.checkField).on('change', 'select.required', validator.checkField).on('keypress', 'input[required][pattern]', validator.keypress);
$('.multi.required').on('keyup blur', 'input', function() {
    validator.checkField.apply($(this).siblings().last()[0]);
});

$('form').submit(function(e) {
    e.preventDefault();
    var submit = true;
    
    if (!validator.checkAll($(this))) {
        submit = false;
    }
    if (submit) this.submit();
    return false;
});
