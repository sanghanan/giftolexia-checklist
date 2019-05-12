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