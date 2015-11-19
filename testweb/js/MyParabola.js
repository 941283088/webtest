function Myparabola(srcElement,tarElement,options){
	if(typeof srcElement ==="undefined" || srcElement.length==0  || typeof tarElement === "undefined" || tarElement.length ==0)
		return;
	var defaults={
		duration:500,
		speed:170,      //速度
		curvature:0.002  //曲率
	}
	var Ans = {};
	options = options||{};
	//参数初始化
	for(var key in defaults){
		Ans[key]=options[key]||defaults[key];
	}
	Ans.element = srcElement;
	Ans.oldX=srcElement.style.left;
	Ans.oldY=srcElement.style.top;
	Ans.targetX = tarElement.left;
	Ans.targetY = tarElement.right;
	Ans.X=0;
	Ans.y=0;
	Ans.a = Ans.curvature;
	Ans.b = (targetY - a* targetX*targetX)/targetX;
	Ans.domove:function(x,y)
	{
		this.element.left = this.oldX+x;
		this.element.top = this.oldY+y;
		
	}
	Ans.Go=function()
	{
		var ntime = +new Date();
		
       	var x =  (this.targetX-this.oldX) *(ntime-this.begin)/this.duration;
       	var y = this.a * x * x + this.b * x ;
       	this._doMove(x,y);
	}
}



