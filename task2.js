function calc() {
  let brand = document.getElementById("brand");
  let year = document.getElementById("year");
  let bodytype = document.getElementById("bodytype");
  let bodytype2 = document.getElementById("bodytype2");
  let engine = document.getElementById("engine");
  let engine2 = document.getElementById("engine2");
  let mileage = document.getElementById("mileage");
  let result = document.getElementById("result");

  let price = 0;
  price += parseInt(brand.options[brand.selectedIndex].value);
  price += parseInt(year.options[year.selectedIndex].value);
  price += bodytype.checked == true ? parseInt(bodytype.value) : 0;
  price += bodytype2.checked == true ? parseInt(bodytype2.value) : 0;
  price += engine.checked == true ? parseInt(engine.value) : 0;
  price += engine2.checked == true ? parseInt(engine2.value) : 0;
  price = parseInt(mileage.value) + price;

  result.value = price;
}
