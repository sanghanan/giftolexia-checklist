var visited = sessionStorage['visited'];
if (!visited) {
    init();
    sessionStorage['visited'] = true;
}



function init() {
    setSum(0)
    console.log("started the js")
}



function total() {
    $('input[type="radio"]:checked').each(function () {
        total = getSum() + parseInt(this.value)
        setSum(total)
        console.log(total)

    });
    var form = $('#form')
    var navbar = $('.navbar navbar-dark fixed-top')

    // listen for `invalid` events on all form inputs
    form.find(':input').on('invalid', function (event) {
        var input = $(this)

        // the first invalid element in the form
        var first = form.find(':invalid').first()

        // only handle if this is the first invalid input
        if (input[0] === first[0]) {
            // height of the nav bar plus some padding
            var navbarHeight = navbar.height() + 30

            // the position to scroll to (accounting for the navbar)
            var elementOffset = input.offset().top - navbarHeight

            // the current scroll position (accounting for the navbar)
            var pageOffset = window.pageYOffset - navbarHeight

            // don't scroll if the element is already in view
            if (elementOffset > pageOffset && elementOffset < pageOffset + window.innerHeight) {
                return true
            }

            // note: avoid using animate, as it prevents the validation message displaying correctly
            $('html,body').scrollTop(elementOffset)
        }
    })
}

function showResult() {
    console.log("Javascript result")
    sum = getSum()
    console.log(sum)
    document.getElementById("result").innerHTML = sum;
    if (sum < 90) {
        $('#alert-id').hide();
        $('.result-line').addClass("my-2");
    }
    else {
        $('#alert-id').show();
    }
}

function getSum() {
    sum = sessionStorage.getItem("sum")
    return parseInt(sum)
}

function setSum(value) {
    sessionStorage.setItem("sum", value)
}

function addRequired() {
    $('.form-check-input').attr('required', 'required');
}