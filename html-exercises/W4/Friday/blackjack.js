// document.getElementById("deal-button").onclick=function(){
//     //write dealer logic here
//     console.log("this button is working")
//     var backCard1 = document.createElement("img");
//     backCard1.src = "JPEG/blue_back.jpg";
//     var dealerCard1 = document.getElementById("dealer-hand");
//     dealerCard1.appendChild(backCard1);

//     var backCard2 = document.createElement("img");
//     backCard2.src = "JPEG/blue_back.jpg";
//     var dealerCard2 = document.getElementById("dealer-hand");
//     dealerCard2.appendChild(backCard2);

// };

let dealerCard1 = document.querySelector("#dealer-hand");
let playerCard1 = document.querySelector("#player-hand");
let dealButton = document.querySelector("#deal-button");

//Deal Button
dealButton.addEventListener('click', function(){
   //write dealer logic here
   let backCard1 = document.createElement("img");

   backCard1.src = "JPEG/blue_back.jpg";
   backCard1.className ="cardImage";
   dealerCard1.appendChild(backCard1);

   var backCard2 = document.createElement("img");
   backCard2.src = "JPEG/blue_back.jpg";
   backCard2.className = "cardImage";
   var dealerCard2 = document.getElementById("dealer-hand");
   dealerCard2.appendChild(backCard2);

   var playCard1 = document.createElement("img");
   playCard1.src = "JPEG/blue_back.jpg";
   playCard1.className = "cardImage";
    var playerCard1 = document.getElementById("player-hand");
    playerCard1.appendChild(playCard1);

    var playCard2 = document.createElement("img");
    playCard2.src = "JPEG/blue_back.jpg";
    // playCard2.className = "cardImage";
    var playerCard2 = document.getElementById("player-hand");
    playerCard2.appendChild(playCard2);
});


document.getElementById("btnHit").addEventListener("click", function(){
    //write "hit" logic here
    let additCard = document.createElement("img");
    additCard.src = "JPEG/blue_back.jpg";
    additCard.className = "cardImage";
    var playerAdditCard = document.getElementById("player-hand");
    playerAdditCard.appendChild(playCard2);
});

 

document.getElementById("btnStand").addEventListener("click", function(){
    //write "Stand" logic here
});