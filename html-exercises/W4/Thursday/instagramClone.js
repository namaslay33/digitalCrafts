

// var superMarioChar = ["Mario", "Luigi", "Princess Peach", "Toad", "Yoshi", "Goomba", "Koba", "Wario", "Wailuigi", "Bowser"]
// var phrase = document.getElementsByClassName("phrase").innerHTML = ("You've selected " + superMarioChar);

var char = document.getElementsByClassName("character");

var charPhrase = document.getElementsByClassName("phrase");


for (i = 0; i < char.length; i++){
    charPhrase[i].addEventListener("click", changePhrase);
    // charPhrase[i].innerHTML = "You have selected ";
}

function changePhrase(){
    alert("Click detected!");
}
