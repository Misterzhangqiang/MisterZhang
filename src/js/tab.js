/*
  面向对象Tab
*/
function Tab(tabId) {
  this.tab = document.getElementById(tabId);
  this.aInput = this.tab.getElementsByTagName('input');
  this.aDiv = this.tab.getElementsByTagName('div');
}

// Tab.prototype.change = function(){
//   // 这里的this是谁？Tab的实例对象
//   var that = this;
//   // 初始化第一个div
//   this.aDiv[0].style.display = 'block';
//   this.aInput[0].style.backgroundColor = 'orange';

//   for(var i=0;i<this.aInput.length;i++){
//     this.aInput[i].index = i;
//     this.aInput[i].onclick = function(){
//       // 这里的this是谁？被点击的按钮
//       for(var j=0;j<that.aInput.length;j++){
//         // 清空所有样式
//         that.aInput[j].style.backgroundColor = '';
//         that.aDiv[j].style.display = 'none';
//       }
//       // 设置当前样式
//       this.style.backgroundColor = 'orange';
//       that.aDiv[this.index].style.display = 'block';
//     }
//   }
// }
Tab.prototype.change = function(){
  this.aDiv[0].style.display = 'block';
  this.aInput[0].style.backgroundColor = 'blue';
  for(var i=0;i<this.aInput.length;i++){
    this.aInput[i].index = i;
    this.aInput[i].onclick = (e) => {
      for(var j=0;j<this.aInput.length;j++){
        // 清空所有样式
        this.aInput[j].style.backgroundColor = '';
        this.aDiv[j].style.display = 'none';
      }
      // 设置当前样式
      e.target.style.backgroundColor = 'orange';
      this.aDiv[e.target.index].style.display = 'block';
    }
  }
}

