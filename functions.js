function clickME() {
    function randomNumber1() {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        return randomNumber1;
    }
    rannum1 = randomNumber1();
    var randomImageSource1 = "images/dice" + rannum1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomImageSource1);
}