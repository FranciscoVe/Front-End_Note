var cu = "http://money.scupio.com/ADPinline/Click.aspx?";

var en23 = "";
var en24 = "";

function go(u) {
    if (navigator.appName == "Microsoft Internet Explorer")
    { var l = document.getElementById("bwlink"); l.target = "_blank"; l.href = u; l.click(); }
    else { window.open(u); }
}

function onscope(r, i) {
    var ru = cu + ad[i] + up;
    onscope3(r, ru);
}

// head video, play and charge
function onheadvideo(r, i) {
    var ru = cu + ad[i] + up + "&redirect=3";
    onscope3(r, ru);
}

function onscope3(r, ru) {
    if (r == 'space' && na == 0) go(ru + '&clickrange=space' + '&en23=' + en23 + '&en24=' + en24);
    else if (r == 'space' && na == 1) na = 0;
    else if (r == 'subject') { na = 1; go(ru + '&clickrange=subject' + '&en23=' + en23 + '&en24=' + en24); }
    else if (r == 'note') { na = 1; go(ru + '&clickrange=note' + '&en23=' + en23 + '&en24=' + en24); }
    else { na = 1; go(ru + '&clickrange=' + r + '&en23=' + en23 + '&en24=' + en24); }
}

function go2(u,t) {
    if (navigator.appName == "Microsoft Internet Explorer")
    { var l = document.getElementById("bwlink"); l.target=t; l.href = u; l.click(); }
    else { window.open(u,t); }
}

function onscope2(r,i,t) {
    var ru = cu + ad[i] + up;
    if (r == 'space' && na == 0) go2(ru + '&clickrange=space',t);
    else if (r == 'space' && na == 1) na = 0;
    else if (r == 'subject') { na = 1; go2(ru + '&clickrange=subject',t); }
    else if (r == 'note') { na = 1; go2(ru + '&clickrange=note',t); }
    else { na = 1; go2(ru + '&clickrange=' + r,t); }
}
function onLogo() {
    var itm = document.getElementById('bwlogo1');
    itm.style.visibility = 'hidden';
    itm = document.getElementById('bwlogo2');
    itm.style.visibility = 'visible';
}
function outLogo() {
    var itm = document.getElementById('bwlogo2');
    itm.style.visibility = 'hidden';
    itm = document.getElementById('bwlogo1');
    itm.style.visibility = 'visible';
}
var bwtimer;
function stopper() {
    clearTimeout(bwtimer);
}
function closer() {
    bwtimer = setTimeout('outLogo()', 1000);
}

function pad2(i) {
    if (i < 10 && i>=0)
        return "0" + i;
    else
        return "" + i;
}

function pad3(i) {
    if (i < 10 && i >= 0)
        return "00" + i;
    else if (i < 100 && i >= 0)
        return "0" + i;
    else
        return i + "";
}
