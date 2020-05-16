let isMomHappy = true;
let phone = {
    brand: 'Samsung',
    color: 'black'
};

const func = new Promise((resolved, rejected) => {
    if (isMomHappy) {
        console.log(phone);
        resolved();
    } else {
        console.log("mom is not happy\n");
        rejected(new Error("mom is not happy\n"));
    }
});