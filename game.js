var op1 = "tijera";
var op2 = "papel";
var op3 = "piedra";

var resultado = function (user, cpu) {
  if (user != cpu) {
    if (user === op1 && cpu === op2) {
      console.log("gana usuario con " + op1);
    } else if (user === op2 && cpu === op3) {
      console.log("gana usuario con " + op2);
    } else if (user === op3 && cpu === op1) {
      console.log("gana usuario con " + op3);
    } else if (user === op1 && cpu === op3) {
      console.log("gana usuario con" + op1);
    } else {
      console.log("cpu gano");
    }
  } else if (user === cpu) {
    console.log("empate");
  }
};

resultado(op3, op2);
