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
        car1 = createSprite(200,600,30,30);
        car1.addImage(car1Img);
        car2 = createSprite(300,600,30,30);
        car2.addImage(car2Img);
        car3 = createSprite(400,600,30,30);
        car3.addImage(car3Img);
        car4 = createSprite(500,600,30,30);
        car4.addImage(car4Img);
        cars = [car1,car2,car3,car4];
    }

    play(){
        form.hide();

        Player.getPlayerInfo();
        Player.getCarsAtEnd();

        image(trackImg,0,-height * 12, width,height * 13);

        //for-in loop - loop through JSON object or arrays
        //allPlayers - player1,player2...allPlayers[plr].name
        //player1 - car1- cars[0]
        // x pos, y pos, index
        //player1 - 200, 600-distance, 0,
        // player2 - 300, 600-distance, 1

        var y = 300
        textSize(30);
        fill("white");
        stroke("black");
        var x = 350;
        var index = 0;
               
        for(var plr in allPlayers){
            cars[index].x = x;
            cars[index].y = height-allPlayers[plr].distance;
            
            x += 180;
            //selecting current player
            if(index === player.index-1){
                fill("Red")
                ellipse(cars[index].x, cars[index].y, 110, 150)
                camera.position.x = width/2;
                camera.position.y = cars[index].y - height/2 + 100;
            }

            fill("White")
            textAlign(CENTER);
            text(allPlayers[plr].name,cars[index].x,cars[index].y - 80)
            index += 1;
        }

        if(keyDown(UP_ARROW) && player.index !== null){
            player.distance += 50; 
            player.update();
        }

        if(player.distance > 7650){
            gameState = 2;
            player.rank += 1;
            Player.updateCarsAtEnd(player.rank);
        }
        
        drawSprites();
    }

    end(){
        //console.log("Game Has Ended");
        console.log(player.rank)
    }
}
