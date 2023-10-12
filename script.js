let input1Element
let input2Element
let resultElement

function init (){
    input1Element = document.getElementById("input1");
    input2Element = document.getElementById("input2");
    resultElement = document.getElementById("result");
    document.getElementById("runBtn").onclick=doCalculations;
}
window.onload=init

function doCalculations() {
    let length;
    let width;
    let area;

    let distance;
    let unit = ["steg", "fot" ,"tum"];
    let conv = [90, 30.48, 2.54];

    let increase;
    let increaseLenght = 1.5; //Förändringsfaktor som ska multipliceras med höjden
    let increaseWidth = 3; //Meter som ska adderas till bredden

    length = Number(input1Element.value);
    width = Number(input2Element.value); 

    area = length * width;

    resultElement.innerHTML = "<p>Rektangeln har en area av " + area + "m<sup>2</sup>.</p>";

    area = 3.14159 * length * width / 4;

    resultElement.innerHTML += "<p>En ellips skulle få arean " + area + "m<sup>2</sup>.</p>";

    resultElement.innerHTML += "<p> Längden " + length + " meter blir:</p>";

    distance = length / conv[0] * 100;
    resultElement.innerHTML += "<P>" + distance + " " + unit[0] + "</p>";

    distance = length / conv[1] * 100;
    resultElement.innerHTML += "<p>" + distance + " " + unit[1] + "</p>";
    
    distance = length / conv[2] * 100;
    resultElement.innerHTML += "<p>" + distance + " " + unit[2] + "</p>";

    increase = (length * increaseLenght) * (width + increaseWidth); //Göra beräkningen av den nya arean, viktigt att ha paranteser så att allt beräknas i rätt ordning. Alla beräkningar görs i den här raden och i en enda variabel för att minska mängden variabler och mängd kod.
    resultElement.innerHTML += "<p>Om längden skulle öka med 50% och man skulle lägga till 3 meter till bredden så skulle arean bli " + increase + "m<sup>2</sup>.</p>" //skriver ut resultatet 
}
