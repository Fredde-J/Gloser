$("#addButton").click(function(){
console.log("hello")
let word1 = $("#word1").val();
console.log(word1)
})
let question1 = new Question(1,"Mat","Food")
let question2 = new Question(2, "Golv", "Floor")
let question3 = new Question(3, "Tangentbord", "Keyboard")
let questions = [question1,question2,question3];

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

function getPersonalInfo(){
    var name = prompt("enter your name:");
    var socialSecNr = prompt("enter your social sec nr:");
    var adress = prompt("enter your adress:");
    var person = {name, socialSecNr, adress}
    var nameout = document.querySelector("#nameOut")
    var socialSecNrOut = document.querySelector("#socialSecNrOut")
    var adressOut = document.querySelector("#adressOut")
    nameout.innerHTML ="NAME: " + person.name;
    socialSecNrOut.innerHTML ="SOCIAL SEC NR: " + person.socialSecNr;
    adressOut.innerHTML ="Adress: " + person.adress;
}