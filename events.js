function myfun(){
    const con = document.getElementById("div")
    const img = document.createElement("img")
    console.log(con.src)
    if(con.img ){
    // const img = document.createElement("img")
    img.src = "image2.png"
    }
    else{
        img.src="netflix-avatar.png"
    }
    con.replaceChild(``)
}
function onClick(name){
    console.log(event)
    alert(`${event.target.innerHTML} is clicked`)
}
function onChange(){
    event.target.value="changed"
    console.log(event.target.name,event.target.value)
}

//CUSTOM EVENTS

const cusEvent = new Event("name"); // create
document.addEventListener("name",function(){
    alert("name event is triggered");
})


document.getElementById("btn").addEventListener("click",function(){ // trigger the event
    document.dispatchEvent(cusEvent)
})




// const btn = document.getElementById("btn")
// btn.addEventListener("click",myfun) // click
// "dblclick" // double click
// "keypress"
// "keydown"
// "keyup"
// "onMouseHover"
// "onMouseDown"
