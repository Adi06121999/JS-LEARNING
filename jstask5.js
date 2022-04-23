const counterBtn = (btn) => {
    let counter = parseFloat(countertext.textContent);


    function neg() {
        return counter <= 0 ? alert("Dont enter -ve") : console.log("Entered non negative value")
    }

    if (btn === "-") {
        neg();
        counter -= 1;
    } else if (btn === "+") {
        counter = counter + 1;
    } else {
        counter = 0;
    }
    countertext.textContent = counter
    if (counter < 0) {
        countertext.style.backgroundColor = '#F05454';
    } else if (counter === 0) {
        countertext.style.backgroundColor = '#00848f';
    } else {
        countertext.style.backgroundColor = '#7BBEEB';
    }
}