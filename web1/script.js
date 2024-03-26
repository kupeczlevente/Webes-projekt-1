var jatekosPontszam = 0;
var szamitogepPontszam = 0;
var drawPontszam = 0;

function Start(valasztas) {
  var jatekosValasztasa = valasztas.id;
  var szamitogepValasztasa = GeneralValasztas();

  document.getElementById("computer-choice").innerHTML = szamitogepValasztasa.charAt(0).toUpperCase() + szamitogepValasztasa.slice(1);

  if (jatekosValasztasa == "kő" && szamitogepValasztasa == "papír" ||
      jatekosValasztasa == "papír" && szamitogepValasztasa == "olló" ||
      jatekosValasztasa == "olló" && szamitogepValasztasa == "kő") {
        szamitogepPontszam++;
        document.getElementById("computer-score").innerHTML = szamitogepPontszam;
        document.getElementById("win-or-lose").style.color = "#D61C4E";
        document.getElementById("win-or-lose").innerHTML = "A számítógép nyert!";
      }
  else if (szamitogepValasztasa == "kő" && jatekosValasztasa == "papír" ||
            szamitogepValasztasa == "papír" && jatekosValasztasa == "olló" ||
            szamitogepValasztasa == "olló" && jatekosValasztasa == "kő") {
              jatekosPontszam++;
              document.getElementById("player-score").innerHTML = jatekosPontszam;
              document.getElementById("win-or-lose").style.color = "#1CD6CE";
              document.getElementById("win-or-lose").innerHTML = "A játékos nyert!";
            }
  else {
    drawPontszam++;
    document.getElementById("draw-score").innerHTML = drawPontszam;
    document.getElementById("win-or-lose").style.color = "#FEDB39";
    document.getElementById("win-or-lose").innerHTML = "Döntetlen!";
  }
}

function GeneralValasztas() {
  return ["kő", "papír", "olló"][Math.floor(Math.random() * 3)];
}

function RestartGame() {
  jatekosPontszam = 0;
  szamitogepPontszam = 0;
  drawPontszam = 0;
  document.getElementById("computer-score").innerHTML = 0;
  document.getElementById("player-score").innerHTML = 0;
  document.getElementById("draw-score").innerHTML = 0;
  document.getElementById("computer-choice").innerHTML = "";
  document.getElementById("win-or-lose").style.color = "white";
  document.getElementById("win-or-lose").innerHTML = "";
}
