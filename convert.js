function doConvert() {
    var a = document.getElementById('to').value;
    var b = document.getElementById('from').value;
    var c = parseFloat(document.getElementById('amount').value);
    console.log(c);
    if (a == 'VietNam' && b == 'USD') {
        alert('Result = ' + c * 23000 + ' VND');
    } else if (a == 'VietNam' && b == ' VietNam') {
        alert('Result = ' + c + ' VND');
    } else if (a == 'USD' && b == 'USD') {
        alert('Result = ' + c + ' USD');
    } else alert('Result = ' + c / 23000 + ' USD');
}