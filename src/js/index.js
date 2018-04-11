let btn = document.getElementById('btn');
let info = document.getElementById('info');
let change = (color) => {
  info.style.color = color;
}
btn.onclick = function(){
  change('pink');
}
// 控制选项卡
let tab = new Tab('tab');
tab.change();