const items = ["rood", "groen", "blauw", "geel", "oranje"];
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let totaal = document.getElementById("totaal");

item1.innerHTML = items[0];
item2.innerHTML = items[items.length - 1];
totaal.innerHTML = "totaal: " + items.length;