const imgLoader = document.getElementById("loader");
let items = document.getElementById("items");
const header = document.querySelector("h1");

getLocalStorageCurrency();

let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);

xhr.send();
xhr.onload = () => {
  const xhrResult = xhr.response;

  if (localStorage.getItem("currency")) {
    items.remove();
    createDivItems();
  }

  localStorage.setItem("currency", xhrResult);

  const xhrResultCurrency = JSON.parse(xhrResult);
  createCurrencyElements(xhrResultCurrency);
};

function createCurrencyDiv(charCode, value) {
  const item = document.createElement("div");
  item.className = "item";

  const itemCode = document.createElement("div");
  itemCode.className = "item__code";
  itemCode.innerText = charCode;

  const itemValue = document.createElement("item__value");
  itemValue.className = "item__value";
  itemValue.innerText = value;

  const itemCurrency = document.createElement("item__currency");
  itemCurrency.className = "item__currency";
  itemCurrency.innerText = "руб.";

  item.append(itemCode);
  item.append(itemValue);
  item.append(itemCurrency);
  items.append(item);
}

function getLocalStorageCurrency() {
  if (localStorage.getItem("currency")) {
    const xhrResultCurrency = JSON.parse(localStorage.getItem("currency"));
    createCurrencyElements(xhrResultCurrency);
  }
}

function createDivItems() {
  const item = document.createElement("div");
  item.id = "items";
  header.after(item);
  items = item;
}

function createCurrencyElements(xhrResultCurrency) {
  const { Valute } = xhrResultCurrency.response;
  for (let key in Valute) {
    const { CharCode, Value } = Valute[key];
    createCurrencyDiv(CharCode, Value);
  }

  if (imgLoader.classList.contains("loader_active")) {
    imgLoader.classList.remove("loader_active");
  }
}
