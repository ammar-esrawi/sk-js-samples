
//
class BaseItem {
    constructor(text) {
        this.text = text;
    }

    draw() {
        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(this.text);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("items").appendChild(node);
    }
}

class StyledItem extends BaseItem{

    constructor(text,style){
        super(text);
        this.style=style;
    }

    draw(){
        var node = document.createElement("LI");                 // Create a <li> node
        node.setAttribute("style", this.style);
        var textnode = document.createTextNode(this.text);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("items").appendChild(node);

    }
}
class RedBackgroundItem extends BaseItem{

    constructor(text){
        super(text);
        this.style="background:red;";
    }

    draw(){
        var node = document.createElement("LI");                 // Create a <li> node
        node.setAttribute("style", this.style);
        var textnode = document.createTextNode(this.text);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("items").appendChild(node);

    }
}

//---------images----------

