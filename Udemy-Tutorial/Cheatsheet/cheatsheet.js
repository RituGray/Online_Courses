/* Dies ist ein kleines Cheat-Sheet für Javascript */

/* 1. Strict Mode */
// Wichtig um auch mit altem Javascript-Code zu arbeiten.
// Am Anfang der .js-Datei einfügen.
"use strict";

/* 2. Ausgabe in der Konsole */
// Werte in der Konsole ausgeben.
console.log("Wert");

/* 3. Variablen deklarieren */
// Setzen von Variablen und zuweisen von Startwerten.
let a = "Wert";
let b = 5;

/* 4. Funktionen */
// Grundgerüst einer Funktion.
function name(wert1, wert2) {
    return wert1 + wert2;
}

/* 5. asynchrone Funktionen */
// Funktion wird nach X Millisekunden ausgeführt.
setTimeout(func, X);
// Funktion wird alle X Millisekunden ausgeführt.
setInterval(func, X);

/* 6. Zugriff auf Element aus dem HTML */
// Über die ID.
document.getElementById("id");
// Über den Klassennamen.
document.getElementsByClassName("ClassName");
// Über den Tagnamen.
document.getElementsByTagName("TagName");

/* 7. Eventlistener */
// Auf ein bestimmtes Ereigniss reagieren.
// Zum Beispiel einem Klick auf das Element.
let elementByID = document.getElementById("id");
elementByID.addEventListener("click", function() {
    // Was soll beim Klick passieren?
}, false)

/* 8. Elemente verändern */
let elementByID1 = document.getElementById("id");
// Den HTML-Code verändern.
elementByID1.innerHTML = "<div>Neuer Text</div>";
// Den Text-Inhalt ändern.
elementByID1.innerText = "Neuer Text";
// Zugriff auf die Klassen.
elementByID1.className = "newClassName anotherNewClassName";
// Verändern der CSS-Klassen.
elementByID1.classList.add("newClass");
elementByID1.classList.remove("oldClass");
elementByID1.classList.toggle("classToToogle")
// Zugriff auf den CSS-Style und Attribute.
elementByID1.style.color = "red";
// Wichtig! Styles wie border-top wird in der .js-Datei zu borderTop!

/* 9. neues Element erstellen */
// Einen neuen Absatz erstellen.
document.createElement("p");
// Ein neues Bild erstellen.
document.createElement("img");

/* 10. neues Element auf Seite einfügen */
// Element wo das neue Element eingefügt werden soll.
let elementByID2 = document.getElementById("id");
// Neues Element erstellen.
let newItem = document.createElement("p");
// Anpassung des neuen Elements.
newItem.innerText = "Das ist ein neues p-Tag mit Text."
newItem.style.color = "green";
// Neues Element einfügen.
elementByID2.appendChild(newItem);

/* 11. Zugriff über CSS-Selektoren */
// selector ist eine CSS-Gruppe.
// selector = .panel .alert
document.querySelector("selector");
document.querySelectorAll("selector");

/* 12. Warten das die Seite fertig geladen ist. */
// Seite wird von Oben nach Unten geladen.
// So kann es passieren das JS-Code ausgeführt wird,
// bevor der Body der Seite geladen wurde.
window.addEventListener("load", function() {
    // Code wird ausgeführt wenn die Seite geladen vollständig geladen wurde.
}, false)

/* 13. xxx */
//