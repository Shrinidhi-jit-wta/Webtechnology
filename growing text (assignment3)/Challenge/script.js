function main() {


    var var1 = setInterval(inTimer, 100);
    var fs = 10; //font size
    var ids = document.getElementById("growtext");


    function inTimer() {
        ids.innerHTML = 'Just shoot!!!!';
        ids.setAttribute('style', "font-size: " + fs + "px; color: white");
        fs += 5;
        if (fs >= 50) {
            clearInterval(var1); //paused
            var2 = setInterval(deTimer, 100);

        }

    }

    function deTimer() //fs = 50px
    {
        fs -= 5;
        ids.innerHTML = 'Just shoot!!!!';
        ids.setAttribute('style', "font-size: " + fs + "px; color: white");
        if (fs == 10) {
            clearInterval(var2); //paused
            var1 = setInterval(inTimer, 100);
        }
    }
}