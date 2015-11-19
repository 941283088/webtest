var node ={
	node:function()
	{
		this.left="red";
		this.right="block";
	},
	left:null,
	right:null
}
function Treenode()
{
	this.left=null;
	this.right=null;
	this.p=null;
	this.color="red";
}
$(document).ready(function()
{
	var node1 = new node.node();
	var node2 = new Treenode();
	alert(node1.left);
});
