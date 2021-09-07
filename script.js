var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var done = document.querySelector("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function crossed(){
    done.classList.toggle("done");
    console.log("done")
}

function addlistafterclick(){
    if (inputLength() > 0){
        createListElement();
}
}

function addlistafterkeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
    }
}

button.addEventListener("click", addlistafterclick);

input.addEventListener("keypress", addlistafterkeypress);

done.addEventListener("click", crossed);





// -------First Example------
// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("clicked");
// })