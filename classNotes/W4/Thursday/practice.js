var listItems = document.querySelectorAll("ul");
// var ourHeadline = document.getElementsById("our-headline");
// var myButton = document.getElementById("my-button");


console.log("list Items", listItems);
function activateItem(){
    alert("click detected");
}

for (i=0; i < listItems.length; i++ ){
    listItems[i].addEventListener("click", activateItem);
}





// function activateItem(){
//     ourHeadline.innerHTML = this.innerHTML;
// }

var myButton = document.querySelectorAll("#myButton");

myButton[0].addEventListener("click", function(e){
    alert('hello world');
    var label = document.getElementById("our-headline");
    label.textContent = "hello world";

    console.log(e);
});


