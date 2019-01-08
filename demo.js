// alert("呵呵呵");

var output = document.getElementById("output");
var textera = document.getElementById("input");
/**按钮 */
var start = document.getElementById("start");
var reset = document.getElementById("reset");
/**显示内容 */


// dropdown();
var code = textera.value ? textera.value : "";
function dropdown() {
    output.innerHTML = textera.value;
    console.dir("output:"+output.value);
    console.dir("input:"+textera.value);
}
window.addEventListener("load", dropdown);

textera.addEventListener("input", dropdown);
start.addEventListener("click", function () {
    console.log(1);
    textera.value = '<h1>My short story</h1><p>I am a policewoman and my name is Trish.</p><p>My legs are made of cardboard and I am married to a fish.</p>';
    dropdown();
});
reset.addEventListener("click", function () {
    textera.value = code;
    dropdown();
});