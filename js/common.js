function getblackValue(getElement) {
    const GetCaseValue = document.getElementById(getElement);
    const getdatacase = GetCaseValue.innerText;
    const getCurrentTotal = parseInt(getdatacase);
    return getCurrentTotal;
    // console.log(getsubtotal);
}

function currentSubtotal() {
    const getCurrentTotal = getblackValue('getPrice');
    const getCaseTotal = getblackValue('price');
    const getSubTotalValue = getCurrentTotal + getCaseTotal;
    const getSubValue = document.getElementById('subtotal');
    const getfinalSubtoal = getSubValue.innerText;
    getSubValue.innerText = getSubTotalValue;
    const finalTotalValu = document.getElementById('finalTotal');
    const getFinal = finalTotalValu.innerText;
    finalTotalValu.innerText = getSubTotalValue;
}