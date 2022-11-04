function sumInput() {
  let numbers = [];
  let a = document.getElementById("first_elem").value;
  let b = document.getElementById("second_elem").value;
  let c = document.getElementById("third_elem").value;
  numbers.push(Number(a));
  numbers.push(Number(b));
  numbers.push(Number(c));
  numbers.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("sort").innerHTML = numbers;
  document.getElementById("sum").innerHTML = Number(a) + Number(b) + Number(c);
}