// Color the logo
var mainTextLogo = document.getElementById("main-text-logo").innerHTML.split("");
var newTextLogo = "";

var color = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"];

var i =  0;
for (var char of mainTextLogo) {
    newTextLogo += `<span style="color: ${color[i++ % color.length]}">${char}</span>`;
}
document.getElementById("main-text-logo").innerHTML = newTextLogo;