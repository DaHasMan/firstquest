const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Doggsterest');
  });

// varibles

let slider_cfg = {
	1: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
	2: "https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_960_720.jpg",
	3: "https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256__340.jpg",
	4: "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634__340.png",
	5: "https://cdn.pixabay.com/photo/2019/11/08/11/56/cat-4611189__340.jpg",
	6: "https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256__340.jpg",
}

let slider_image = document.getElementById('slider_image');
let left = document.getElementById('left');
let right = document.getElementById('right');

let sin = 1; //slider_image_number - sin 
let size =  Object.keys(slider_cfg).length; 
let path = slider_cfg[sin];

// update slide
function update(){
	path = slider_cfg[sin];
	slider_image.setAttribute("src", path);
}

// toggle slides
left.onclick = function(){
	if (sin > 1){
		sin = sin - 1;
	} else{
		sin = 1;
	}
	update();
}

right.onclick = function(){
	if (sin < size){
		sin = sin + 1;
	} else{
		sin = size;
	}
	update();
}

// start
update();

app.listen(port);