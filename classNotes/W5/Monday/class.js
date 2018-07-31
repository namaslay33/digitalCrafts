var myImgs = document.querySelectorAll("myImgs"); //Looks for my image

// myImgs[0].addEventListener("click", function(){ //You'd have to do this for each image. YOu might have 10+
//     alert("Hello World")
// })


myImgs.forEach(function(img){                       //Instead you have it go through each image
    img.addEventListener("click", funciton(){
        //event logic
    }
    )
})