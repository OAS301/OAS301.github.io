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
