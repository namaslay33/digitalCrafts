let deck = new Array();
let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck()
{
	let deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle()
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

function renderDeck()
{
	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}

var players = new Array();
function createPlayers(num)
{
    players = new Array();
    for(var i = 1; i <= num; i++)
    {
        var hand = new Array();
        var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
        players.push(player);
    }
}

function createPlayersUI()
{
    document.getElementById('players').innerHTML = '';
    for(var i = 0; i < players.length; i++)
    {
        var div_player = document.createElement('div');
        var div_playerid = document.createElement('div');
        var div_hand = document.createElement('div');
        var div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;

        div_playerid.innerHTML = players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
}

function dealHands()
    {
        // alternate handing cards to each player
        // 2 cards each
        for(var i = 0; i < 2; i++)
        {
            for (var x = 0; x < players.length; x++)
            {
                var card = deck.pop();
                players[x].Hand.push(card);
                renderCard(card, x);
                updatePoints();
            }
        }

        updateDeck();
    }

    function renderCard(card, player)
    {
        var hand = document.getElementById('hand_' + player);
        hand.appendChild(getCardUI(card));
    }

    function getCardUI(card)
    {
        var el = document.createElement('div');
        el.className = 'card';
        el.innerHTML = card.Suit + ' ' + card.Value;
        return el;
    }

    var currentPlayer = 0;
    function hitMe()
    {
        // pop a card from the deck to the current player
        // check if current player new points are over 21
        var card = deck.pop();
        players[currentPlayer].Hand.push(card);
        renderCard(card, currentPlayer);
        updatePoints();
        check();
    }

    function check()
    {
        if (players[currentPlayer].Points > 21)
        {
            document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';
        }
    }

    function stay()
    {
        // move on to next player, if any
        if (currentPlayer != players.length-1) {
            document.getElementById('player_' + currentPlayer).classList.remove('active');
            currentPlayer += 1;
            document.getElementById('player_' + currentPlayer).classList.add('active');
        }

        else {
            end();
        }
    }

    function end()
    {
        var winner = -1;
        var score = 0;

        for(var i = 0; i < players.length; i++)
        {
            if (players[i].Points > score && players[i].Points < 22)
            {
                winner = i;
            }

            score = players[i].Points;
        }

        document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID;
    }

    function check()
    {
        if (players[currentPlayer].Points > 21)
        {
            document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';
        }
    }

    function updateDeck()
    {
        document.getElementById('deckcount').innerHTML = deck.length;
    }

    window.addEventListener('load', function(){
        createDeck();
        shuffle();
        createPlayers(1);
    });