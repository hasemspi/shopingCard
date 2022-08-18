function getiPhoneData(IsIncre) {
    const getValue = document.getElementById('getIphoneValue');
    const getData = getValue.value;
    const getDataString = parseInt(getData);
    let newCurrentData;
    if (IsIncre == true) {
        newCurrentData = getDataString + 1;
    } else {
        newCurrentData = getDataString - 1;
    }
    getValue.value = newCurrentData;
    return newCurrentData;
}

function getdataTotalPrice(newCurrentData) {
    const getPrice = document.getElementById('getPrice');
    const getprices = newCurrentData * 1219;
    getPrice.innerText = getprices;
}

document.getElementById('getIphoneIncre').addEventListener('click', function () {
    const newCurrentData = getiPhoneData(true);
    getdataTotalPrice(newCurrentData);
    //Calculator
    currentSubtotal();



})
document.getElementById('getIphoneDec').addEventListener('click', function () {
    const newCurrentData = getiPhoneData(false);
    getdataTotalPrice(newCurrentData);
    currentSubtotal();
})