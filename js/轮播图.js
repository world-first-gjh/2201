const ulLisObj = document.querySelectorAll('#bannerzuo ul li');
const olLisObj = document.querySelectorAll('#bannerzuo ol li');
const zuo = document.querySelector('#zuo');
const you = document.querySelector('#you');

let index = 0;
let lastIndex = 0;
let times;

olLisObj.forEach((li, key) => {
    li.onclick = function () {
        lastIndex = index;
        index = key;
        change();
    }
});

zuo.onclick = function () {
    lastIndex = index;
    index--;
    if (index <0) {
        index = olLisObj.length-1;
    }
    change();
}
you.onclick = function () {
    lastIndex = index;
    index++;
    if (index > olLisObj.length - 1) {
        index = 0;
    }
    change();
}
function lunbo() {
    times = setInterval(() => {
        you.onclick();
    }, 2000)
}
lunbo();

you.parentNode.onmouseover = function () {
    clearInterval(times)
}
you.parentNode.onmouseout = function () {
    lunbo();
}

function change() {
    olLisObj[lastIndex].className = '';
    ulLisObj[lastIndex].className = '';

    olLisObj[index].className = 'huan';
    ulLisObj[index].className = 'huan';
}