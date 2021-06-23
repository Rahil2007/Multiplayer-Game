class Form{
    constructor(){
        this.title = createElement("h2");;
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.endButton = createButton("Refresh");
        //this.endButton.hide();
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(550,0);

        this.input.position(550,60);

        this.button.position(550,100);
        this.endButton.position(1200,50)

       // 'this' - keyword 
       // arrow function- ()=>{}
        this.button.mousePressed(()=>{
        
           this.input.hide();
           this.button.hide();

           player.name = this.input.value();
           playerCount += 1;
           player.index = playerCount
           player.update();
           player.updateCount(playerCount);

           this.greeting.html("Welcome " + player.name);
           this.greeting.position(550,60);
        })

            this.endButton.mousePressed(()=>{
            game.updateState(0);
            player.updateCount(0);
            window.location.reload();
        })
    }
}