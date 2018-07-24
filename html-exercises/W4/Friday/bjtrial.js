var dealHand = document.querySelector("#dealer-hand");
var playHand = document.querySelector("#player-hand");
var dealButton = document.querySelector("#deal-button");
var hitButton = document.querySelector("#hit-button");

dealButton.addEventListener("click", function(){
    for (i = 0; i < 2; i++){
        var cardImg = document.createElement("img");
        cardImg.src = "JPEG/blue_back.jpg";
        cardImg.className = "cardImg";
        dealHand.appendChild(cardImg);

        var cardImg2 = document.createElement("img");
        cardImg2.src = "JPEG/blue_back.jpg";
        cardImg2.className = "cardImg";
        playHand.appendChild(cardImg2);
    }

});



hitButton.addEventListener("click", function(){
    for (i=0; i < 1; i++){
        var addCard = document.createElement("img");
        addCard.src = "JPEG/blue_back.jpg";
        addCard.className = "cardImg";
        // addCard.appendChild(playHand);
        playHand.appendChild(addCard);
    }
});

document.getElementById("btnStand").addEventListener("click", function(){
    //write "Stand" logic here
});