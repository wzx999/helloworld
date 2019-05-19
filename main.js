// 轮播图地址、标题和链接
var slideImages = [
    {imagePath: 'images/1.jpg', caption: '航拍南京五一出城车辆：“小铁盒”缓慢前行', go: '1.html'},
    {imagePath: 'images/2.jpg', caption: '西湖断桥客流爆满 美女城管巡逻队帅气吸睛', go: '2.html'},
    {imagePath: 'images/3.jpg', caption: '载45人客车爆燃 瞬间被烧成空架', go: '3.html'},
    {imagePath: 'images/4.jpg', caption: '寒流袭英法 酿酒商点蜡烛为葡萄取暖', go: '4.html'},
    {imagePath: 'images/5.jpg', caption: '即将首飞！中国AG600两栖飞机完成首次滑行', go: '5.html'},
];

function mouseover(){
	document.getElementById("dvLoginBox").style.display="block";
	//var a = document.getElementById("spnLoginText").style.offsetLeft;
	//document.getElementById("dvLoginBox").style.left=a;
	}
	
function mouseout(){
	document.getElementById("dvLoginBox").style.display="none";
}
 function animate(slideImages,target){
            clearInterval(slideImages.timer);
			var speed = slideImages.offsetLeft < target ? 15 : -15;
            slideImages.timer = setInterval(function(){
                var result = target - slideImages.offsetLeft;
				//它们的差值不会超过speed
                slideImages.style.left = slideImages.offsetLeft + speed + "px";
                // 有可能有小数的存在，所以在这里要做个判断             
                if (Math.abs(result) <= Math.abs(speed)) {
                    clearInterval(slideImages.timer);
                    slideImages.style.left = target + "px";
                }
            },10);
  
}