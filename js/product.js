var pointer=document.getElementsByClassName("product_section1_top1");
var divs=document.getElementsByClassName("product_section1_bottom");
//console.log(divs);
for(i=0;i<pointer.length;i++){
	pointer[i].onclick=function(){
		//给每一个设置事件
		//当点击他的时候，清空对应div的，将他设为隐藏
		//点击列表出现序号
		for(k=0;k<divs.length;k++){
			divs[k].setAttribute("class","product_section1_bottom hide");
		}
		var xhs=parseInt(this.getAttribute("xh"));//这个得得到的是他的属性值，所以不用innerhtml
		//将当前所点击的序号的值赋值给div，让对应的模块div显示出来
		console.log(xhs);
		divs[xhs].setAttribute("class","product_section1_bottom show");
		//通过当前事件找到当前显示的是什么咖啡，然后再将咖啡的值赋值给后面的导航条
		var mz= this.firstElementChild.innerHTML;
		//获取后边的咖啡的位置
		document.getElementsByClassName("mzxs")[0].innerHTML=mz;
	}
}
//获取导航栏下的li
//var lis1=document.getElementsByClassName("header_center")[0].getElementsByTagName("li");
//console.log(lis1);
//for(k=0;k<lis1.length;k++){
//	lis1[i].onclick=function(){
//		//点击他的时候，清空所有的格式
//		for(j=0;j<lis1.length;j++){
//			lis1[j].setAttribute("class","");
//		}
//		this.setAttribute("class","active");
//		
//	}
//}
