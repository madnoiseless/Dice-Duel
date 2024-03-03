function randomDice() {
  var A1 = Math.floor(Math.random() * 6 + 1);
  return A1;
}
function rollDices() {
  var P1Number = randomDice();
  var P2Number = randomDice();
  if (P1Number === 1) {
    document.getElementById("P1Dice").innerHTML =
      "<div class='dice first-face'><span class='dot'> </span></div>";
  }
  if (P1Number === 2) {
    document.getElementById("P1Dice").innerHTML =
      "<div class='dice second-face'><span class='dot'> </span><span class='dot'> </span></div>";
  }
  if (P1Number === 3) {
    document.getElementById("P1Dice").innerHTML =
      "<div class='dice third-face'><span class='dot'> </span><span class='dot'> </span><span class='dot'> </span></div>";
  }
  if (P1Number === 4) {
    document.getElementById("P1Dice").innerHTML =
      "<div class='fourth-face dice'> <div class='column'> <span class='dot'></span> <span class='dot'></span> </div> <div class='column'> <span class='dot'></span> <span class='dot'></span> </div> </div>";
  }
  if (P1Number === 5) {
    document.getElementById("P1Dice").innerHTML =
      "<div class='fifth-face dice'> <div class='column'> <span class='dot'></span> <span class='dot'></span> </div> <div class='column'> <span class='dot'></span> </div> <div class='column'> <span class='dot'></span> <span class='dot'></span> </div> </div>";
  }
  if (P1Number === 6) {
    document.getElementById("P1Dice").innerHTML =
      "<div class='sixth-face dice'> <div class='column'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </div> <div class='column'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </div> </div>";
  }
  if (P2Number === 1) {
    document.getElementById("P2Dice").innerHTML =
      "<div class='dice first-face'><span class='dot'> </span></div>";
  }
  if (P2Number === 2) {
    document.getElementById("P2Dice").innerHTML =
      "<div class='dice second-face'><span class='dot'> </span><span class='dot'> </span></div>";
  }
  if (P2Number === 3) {
    document.getElementById("P2Dice").innerHTML =
      "<div class='dice third-face'><span class='dot'> </span><span class='dot'> </span><span class='dot'> </span></div>";
  }
  if (P2Number === 4) {
    document.getElementById("P2Dice").innerHTML =
      "<div class='fourth-face dice'> <div class='column'> <span class='dot'></span> <span class='dot'></span> </div> <div class='column'> <span class='dot'></span> <span class='dot'></span> </div> </div>";
  }
  if (P2Number === 5) {
    document.getElementById("P2Dice").innerHTML =
      "<div class='fifth-face dice'> <div class='column'> <span class='dot'></span> <span class='dot'></span> </div> <div class='column'> <span class='dot'></span> </div> <div class='column'> <span class='dot'></span> <span class='dot'></span> </div> </div>";
  }
  if (P2Number === 6) {
    document.getElementById("P2Dice").innerHTML =
      "<div class='sixth-face dice'> <div class='column'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </div> <div class='column'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </div> </div>";
  }
  if (P1Number > P2Number) {
    document.getElementById("par1").innerText = "Player 1 Wins!";
  }
  if (P1Number < P2Number) {
    document.getElementById("par1").innerText = "Player 2 Wins!";
  }
  if (P1Number === P2Number) {
    document.getElementById("par1").innerText = "Draw!";
  }
}
