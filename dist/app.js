"use strict";
const btn = document.querySelector("button");
const inp1 = document.getElementById("num1");
const inp2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
btn.addEventListener("click", function () {
    console.log(add(+inp1.value, +inp2.value));
});
//# sourceMappingURL=app.js.map