class Form{

    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(100,0);
        var input = createInput("Name");
        input.position(100,60);
        var button = createButton("Play");
        button.position(100,100);
        button.mousePressed(function(){
           input.hide();
           button.hide();
           var name = input.value();
           playerCount += 1;
           player.update(name);
           player.updateCount(playerCount);
           var greeting = createElement("h2");
           greeting.html("Welcome " + name);
           greeting.position(700,0);
        })
    }
}