function mycalc(){
    document.getElementById('inner1').innerHTML=eval(document.getElementById('inner1').innerHTML)
}
function myval(a){
    document.getElementById('inner1').innerHTML=document.getElementById('inner1').innerHTML+String(a)
}
function myclear(){
    document.getElementById('inner1').innerHTML=""
}
