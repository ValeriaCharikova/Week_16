let items = ["js", "css", "html"];
console.log(items[0]);

let items2 = [0, 1, false, 2, undefined, "", 3, null];
let result = items2.filter((result) => result > 0);
console.log(result);

let items3 = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
];
let el = items3.findIndex((el) => el.length > 3);
console.log(el);
