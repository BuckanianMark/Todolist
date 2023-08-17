let listcontainer = document.getElementById("list-container");
const inputbox = document.getElementById("input-box");

function addTask(){
    if(inputbox.value ===''){
        alert("You must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.className = "fa fa-times"
        li.appendChild(span);
    }
    saveData()
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()
}
})

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");

}
showTask();
