class Player{
    constructor(){
    this.name = null;
    this.distance = 0;
    this.index = null;
    }

    //to read the playerCount
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }


    //Player.getPlayerInfo
    static getPlayerInfo(){
        var playersRef = database.ref("players");
        playersRef.on("value",function(data){
            allPlayers = data.val()     
        })
    }

    //update the playerCount in database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
    }
}