(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var box = Array.from(document.getElementsByClassName('outer-box'));
        box[0].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        box[0].style.border = "10vw solid #" + Math.floor(Math.random()*16777215).toString(16);
    })
})();

