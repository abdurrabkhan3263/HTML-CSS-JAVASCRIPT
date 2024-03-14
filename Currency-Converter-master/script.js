// Selectors

const tableBody = document.querySelector("tbody");
const btn = document.querySelector(".btn");
const table = document.querySelector('.table')
const output = document.querySelector('.loading');

// Functions
const populate = async(base, quantity) => {
  let data = '';
  const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_OUHrltZo2q0NO5XWPLkutkWYFXaX6gYvsUajMOLk&base-currency=${base}`;
  let response = await fetch(url);
  let rJson = await response.json();
  for(key in rJson.data){
    data += `
    <tr>
    <td>${rJson.data[key].code}</td>
    <td>${rJson.data[key].code}</td>
    <td>${(rJson.data[key].value*quantity).toFixed(3)}</td>
    </tr>
    <tr>  `
  }

  tableBody.innerHTML = data;
  output.style.visibility = 'visible'
  table.style.visibility = 'visible'
};

// Add Event Listner

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = document.querySelector("#quantity").value;
  const base = document.querySelector("select").value;
  if(value === '' || value <= 0){
    return;
  }
  populate(base , parseInt(value));
});
