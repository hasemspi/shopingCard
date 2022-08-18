function getcaseCart(IsValue) {
    const getvalue = document.getElementById('get_value');
    const getData = getvalue.value;
    const getDataString = parseInt(getData);
    let getFinalValue;
    if (IsValue == true) {
        getFinalValue = getDataString + 1;
    } else {
        getFinalValue = getDataString - 1;
    }
    getvalue.value = getFinalValue;
    return getFinalValue;
}

function getotalPrieceValue(getFinalValue) {

    const getFinalValuese = getFinalValue * 59;
    const getPrince = document.getElementById('price');
    getPrince.innerText = getFinalValuese;
}

document.getElementById('Case_Iphone').addEventListener('click', function () {
    const getFinalValue = getcaseCart(true);
    getotalPrieceValue(getFinalValue);
    currentSubtotal();



})

document.getElementById('get_minus').addEventListener('click', function () {
    const getFinalValue = getcaseCart(false);
    getotalPrieceValue(getFinalValue);
    currentSubtotal();

})