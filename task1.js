function sumInput() {
  let numbers = [];
  let a = document.getElementById("first_elem").value;
  let b = document.getElementById("second_elem").value;
  let c = document.getElementById("third_elem").value;
  numbers.push(Number(a));
  numbers.push(Number(b));
  numbers.push(Number(c));
  document.getElementById("sort").innerHTML = numbers.sort();
  document.getElementById("sum").innerHTML = Number(a) + Number(b) + Number(c);
}
