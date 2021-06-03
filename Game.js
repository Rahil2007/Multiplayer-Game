class Game {
    constructor(){
        
    }

    // to read the gameState
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
   
    //to change the gameState in the database
    updateState(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once('value');
            if(playerCountRef){
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }

    play(){
        form.greeting.hide();
        Player.getPlayerInfo();

        //for-in loop - loop through JSON object or arrays
        //allPlayers - player1,player2...allPlayers[plr].name
        var y = 300
        textSize(30);
        fill("white");
        stroke("black");
        for(var plr in allPlayers){
            text(allPlayers[plr].name + " - " + allPlayers[plr].distance, 300,y )
            y = y + 30;
        }

        if(keyDown(UP_ARROW)){
            player.distance += 50;
            player.update();
        }
        
        console.log(allPlayers);
    }
}

