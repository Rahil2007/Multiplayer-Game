class Player{
    constructor(){

    }

    //to read the playerCount
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    //update the playerCount in database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }

    update(name){
        var playerIndex = "player"+playerCount
        database.ref(playerIndex).set({
            name : name
        })
    }

    
}