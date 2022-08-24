const removeFrontEl = document.getElementById("remove-front");
const removeBackEl = document.getElementById("remove-back");
const addFrontEl = document.getElementById("add-front");
const addBackEl = document.getElementById("add-back");
const MainInputEl = document.getElementById("main-input");
const emojiContainer = document.getElementById("emojis")

let myEmojis = ["😀","😌","😌","😌","😌","😌"];
renderEmojis();
function renderEmojis(){
    emojiContainer.textContent = "";
    for(let i = 0; i < myEmojis.length; i++){
      emojiContainer.textContent += myEmojis[i];
    }
    
}

function handleEmojis(action){
    if(action === "add-front"){
        myEmojis.unshift(MainInputEl.value);
    }else if(action === "add-back"){
        myEmojis.push(MainInputEl.value);
    }else if(action === "remove-front"){
        myEmojis.shift();
    }else if(action === "remove-back"){
        myEmojis.pop();
    }else{
        return;
    }
}

function eventHandler(ourEl){
  ourEl.addEventListener("click", (e)=> {
    handleEmojis(e.target.id)
    renderEmojis();
})
}
eventHandler(removeFrontEl);
eventHandler(removeBackEl);
eventHandler(addFrontEl);
eventHandler(addBackEl);

