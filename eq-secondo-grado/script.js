// TODO scrivi lo script

//prendiamo in riferimento al tag html con id "btn-calcola"
const btn = document.getElementById("btn-calcola");

// prendiamo un riferimento agli input testuali
const aInput = document.getElementById("a"); // se assegno una variabile con 'const', questa non può essere riassegnata
const bInput = document.getElementById("b"); // mentre con let si può riassegnare
const cInput = document.getElementById("c");

let soluzione1 = document.getElementById("soluzione1");
let soluzione2 = document.getElementById("soluzione2");


function calcolaSoluzioni() {
  // console.log("a=", aInput.value);
  // console.log("b=", bInput.value); // il .value tira fuori quello che l'utente ha scritto
  // console.log("c=", cInput.value);

  let a = parseFloat(aInput.value);
  let b = parseFloat(bInput.value);
  let c = parseFloat(cInput.value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("*** Inserisci i numeri ***");
  }
  else {
    let delta = (b * b) - 4 * a * c;
    if (delta < 0) {
      soluzione1.textContent = "Nessuna soluzione";
      soluzione2.textContent = "";
    }
    else if (delta == 0) {
      soluzione1.textContent = (-b / (2 * a));
      soluzione2.textContent = "";
    }
    else if (delta > 0) {
      soluzione1.textContent = ((-b + Math.sqrt(delta)) / (2 * a));
      soluzione2.textContent = ((-b - Math.sqrt(delta)) / (2 * a));
    }

    disegnaGrafico(a, b, c);
  }

}

btn.addEventListener("click", calcolaSoluzioni);



/* btn.addEventListener("click", function() { // funzione anonima
    
}); */

/* btn.addEventListener("click", () => { // funzione anonima (arrow function)

}); */

function disegnaGrafico(a, b, c) {
  const canvas = document.getElementById("grafico");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);

  const xv = -b / (2 * a);
  const yv = a * xv * xv + b * xv + c;

  const xRange = Math.max(Math.abs(xv) + 6, 8);
  const yRange = Math.max(Math.abs(yv) + 10, 10);

  const toCanvasX = (x) => (width / 2) + (x / xRange) * (width / 2 - 20);
  const toCanvasY = (y) => (height / 2) - (y / yRange) * (height / 2 - 20);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, toCanvasY(0));
  ctx.lineTo(width, toCanvasY(0));
  ctx.moveTo(toCanvasX(0), 0);
  ctx.lineTo(toCanvasX(0), height);
  ctx.stroke();

  ctx.strokeStyle = "#c084fc";
  ctx.lineWidth = 2.5;
  ctx.beginPath();

  let primaPunto = true;
  for (let px = 0; px <= width; px += 2) {
    const x = ((px - width / 2) / (width / 2 - 20)) * xRange;
    const y = a * x * x + b * x + c;
    const py = toCanvasY(y);

    if (py >= -50 && py <= height + 50) {
      if (primaPunto) {
        ctx.moveTo(px, py);
        primaPunto = false;
      } else {
        ctx.lineTo(px, py);
      }
    }
  }
  ctx.stroke();
}