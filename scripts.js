const bill = {
  home: 750,
  car: 300
};

console.log(bill.home + bill.car);

let power = prompt("What is the amount for power?");
power = Number(power);

while (power !== 0 && !power) {
  alert("This is not a number");
  prompt("What is the amount for power");
}
console.log(power);
