
var inputbox = document.getElementById("input-box")
var ul = document.getElementById("list-container")
var checkbox = ul.querySelectorAll("input[type='checkbox']")


function add() {

    if (inputbox.value === "") {
        alert("You must write Something!")
    }
    else {
        var listitem = document.createElement("li")
        listitem.innerHTML = "<input type='checkbox'>" + inputbox.value + "<button onclick='deleteitem(event)'>\u00d7</button>"
        ul.append(listitem)
        inputbox.value = ""
    }
    saveData();
}


function deleteitem(event) {
    event.target.parentElement.remove()
    saveData();
}

function saveData(){
    localStorage.setItem("data",ul.innerHTML)
}

