//Jag har kommenterat allt jag har lagt till själv i uppgift 11 och de ändringar jag har gjort i föregående uppgifter.

let input1Element
let input2Element
let resultElement

function init(){
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

    let ellipsArea;  //Jag ändrade om ellips delen av funktionen  genom att lägga till en ny variabel för ellips arean så att jag slipper definera om arean när jag behöver den för att räkna ut triangelns area eftersom att annars så kommer det att vara area för en ellips.

    let distance;
    let conv = [90, 30.48, 2.54, 10.764]; //Här la jag till koverteringen för kvadratmeter till kvadratfot så att jag kan använda conv arrayen igen.
    let unit = ["steg", "fot" ,"tum"]; //Jag kan använda samma unit array som jag gjorde innan.

    let totalIncrease; //Deklarerar totalIncrease som en variabel som sedan kommer defineras med den nya arean.
    let increaseLenght = 1.5; //Förändringsfaktor som ska multipliceras med höjden.
    let increaseWidth = 3; //Meter som ska adderas till bredden.

    let triangleArea; //Deklarerar en variabel för triangelns area.
    let triangleAreaFot; //Deklarerar en variabel som kommer vara triangleArea fast i kvadratfot.

    length = Number(input1Element.value);
    width = Number(input2Element.value); 

    area = length * width;

    resultElement.innerHTML = "<p>Rektangeln har en area av " + area + "m<sup>2</sup>.</p>";
    //Ett annat sätt att lösa triangeldelen i uppgift 11 hade varit att definera triangelarean här på detta vis: "triangleArea = area" i funktionen eftersom att den inte skulle defineras om till ellipsens area än, då skulle man inte behöva lägga till ellipsArea variablen men då skulle koden bli rörigare, detta hade dock inte varit ett problem om vi hade varje uträkning till en egen function.
    ellipsArea = 3.14159 * length * width / 4;

    resultElement.innerHTML += "<p>En ellips skulle få arean " + ellipsArea + "m<sup>2</sup>.</p>"; 

    resultElement.innerHTML += "<p> Längden " + length + " meter blir:</p>";

    distance = length / conv[0] * 100;
    resultElement.innerHTML += "<P>" + distance + " " + unit[0] + "</p>";

    distance = length / conv[1] * 100;
    resultElement.innerHTML += "<p>" + distance + " " + unit[1] + "</p>";
    
    distance = length / conv[2] * 100;
    resultElement.innerHTML += "<p>" + distance + " " + unit[2] + "</p>";

    totalIncrease = (length * increaseLenght) * (width + increaseWidth); //Göra beräkningen av den nya arean, viktigt att ha paranteser så att allt beräknas i rätt ordning. Alla beräkningar görs i den här raden och i en enda variabel för att minska mängden variabler och mängd kod.
    resultElement.innerHTML += "<p>Om längden skulle öka med 50% och man skulle lägga till 3 meter till bredden så skulle arean bli " + totalIncrease + "m<sup>2</sup>.</p>" //Skriver ut resultatet.

    triangleArea = area / 2 //Definierar triangelArea.
    triangleAreaFot = triangleArea * 10.764 //Konverterar triangelns area i kvadratmeter till kvadratfot.
    resultElement.innerHTML += "<p>Längden på en triangel med samma mått skulle bli " + triangleAreaFot + " " + unit[1] + "<sup>2</sup>.</p>" //Skriver ut resultatet.
}