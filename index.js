var id = null;
function showGlow() {
    light = document.getElementById("light");
    var header = document.getElementById("header");
    header.style.visibility = "visible";
    header.style.opacity = 1;
    header.style.transition = "visibility 0s, opacity 4s linear";
    document.body.style.backgroundColor = "white"
    document.body.style.transition = "background-color 4s linear"
    console.log(light);
    var a = "30px";
    var b = "30px";
    light.style.transition = "all 4s";
    light.style.boxShadow = `0px 0px ${a} ${b} rgb(255, 224, 21)`

}
light.addEventListener("click", showGlow);
