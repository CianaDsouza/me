
var canvas = new fabric.Canvas('myCanvas');
kite_y=450;
kite_x=350;
hole_y=0;
hole_x=350;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("kite.jpg", function(Img) {
	kite_obj = Img;
	kite_obj.scaleToWidth(50);
	kite_obj.scaleToHeight(50);
	kite_obj.set({
	top:kite_y,
	left:kite_x
	});
	canvas.add(kite_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((kite_x==350)&&(kite_y<=50)){
		canvas.remove(kite_obj);
		console.log("high");
		document.getElementById("hd3").innerHTML="high";
	    document.getElementById("myCanvas").style.borderColor="white";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(kite_y >=5)
		{
			
			kite_y = kite_y - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up arrow key is pressed, X =  " + kite_x + " , Y = "+kite_y);
			canvas.remove(kite_obj);
			new_image();
		}
	}
    //Complete the code for the "down()" function
	function down()
	{
		if(kite_y <=450)
		{
			
			kite_y = kite_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X =  " + kite_x + " , Y = "+kite_y);
			canvas.remove(kite_obj);
			new_image();
		}
	}







	}

	function left()
	{
		if(kite_x >5)
		{
			kite_x = kite_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left arrow key is pressed, X =  " + kite_x + " , Y = " +kite_y );
			canvas.remove(kite_obj);
			new_image();
		}
	}

    //Complete the code for the "right()" function
	function right()
	{
		if(kite_x <=1050)
		{
			
			kite_x = kite_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Rigth arrow key is pressed, X =  " + kite_x + " , Y = "+kite_y);
			canvas.remove(kite_obj);
			new_image();
		}
	}
	