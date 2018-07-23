document.getElementById("deal-button").onclick=function(){
    //write dealer logic here
    console.log("this button is working")
    var backCard1 = document.createElement("img");
    backCard1.src = "JPEG/blue_back.jpg";
    var dealerCard1 = document.getElementById("dealer-hand");
    dealerCard1.appendChild(backCard1);

    var backCard2 = document.createElement("img");
    backCard2.src = "JPEG/blue_back.jpg";
    var dealerCard2 = document.getElementById("dealer-hand");
    dealerCard2.appendChild(backCard2);

};

 

document.getElementById("btnHit").addEventListener("click", function(){
    //write "hit" logic here
});

 

document.getElementById("btnStand").addEventListener("click", function(){
    //write "Stand" logic here
});