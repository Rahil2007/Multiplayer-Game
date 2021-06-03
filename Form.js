class Form{
    constructor(){
        this.title = createElement("h2");;
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(100,0);

        this.input.position(100,60);

        this.button.position(100,100);

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
           this.greeting.position(700,0);
        })
    }
}