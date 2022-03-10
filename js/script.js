function changeH2() {
    let t = document.getElementsByTagName("input")[0];
    let h2 = document.getElementsByTagName("h2")[0];
    h2.innerText = t.value;
}

var fs = 40;
var incdec = 10;

function bigText() {
    let h2 = document.getElementsByTagName("h2")[0];
    fs = fs + incdec;
    h2.style.textDecoration = "none";
    h2.style.fontSize = fs + "px";
}

function smallText() {
    let h2 = document.getElementsByTagName("h2")[0];
    fs = fs - incdec
    h2.style.textDecoration = "none";
    h2.style.fontSize = fs + "px";
}

function italicText() {
    let h2 = document.getElementsByTagName("h2")[0];
    h2.style.textDecoration = "none";
    h2.style.fontStyle = "italic";
}

function underlined() {
    let h2 = document.getElementsByTagName("h2")[0];
    h2.style.textDecoration = "underline";
}

function linethrough() {
    let h2 = document.getElementsByTagName("h2")[0];
    h2.style.textDecoration = "line-through";
}

function uppercase() {
    let h2 = document.getElementsByTagName("h2")[0];
    h2.style.textDecoration = "none";
    h2.style.textTransform = "uppercase";
}

function lowercase() {
    let h2 = document.getElementsByTagName("h2")[0];
    h2.style.textDecoration = "none";
    h2.style.textTransform = "lowercase";
}

function changeFont() {
    let h2 = document.getElementsByTagName("h2")[0];
    h2.style.textDecoration = "none";
    h2.style.fontFamily = "cursive";
}

function shadow() {
    let h2 = document.getElementsByTagName("h2")[0];
    h2.style.textDecoration = "none";
    h2.style.textShadow = "1px 1px 10px blue";
}

function reset() {
    let t = document.getElementsByTagName("input")[0];
    t.value = '';
    let h2 = document.getElementsByTagName("h2")[0];
    h2.innerText = "Seu texto aparecerá aqui";
    h2.style.fontSize = "40px";
    h2.style.fontStyle = "normal";
    h2.style.textDecoration = "none";
    h2.style.textTransform = "none";
    h2.style.textShadow = "none";
    h2.style.fontFamily = "times-new-roman"
    fs = 40;
}

