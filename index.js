/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function generateRandomFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const hourlyRate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { name, occupation, rate: hourlyRate };
}

const freelancers = Array.from(
  { length: NUM_FREELANCERS },
  generateRandomFreelancer
);

function getAvgRate() {
  return (
    freelancers.reduce((sum, freelancer) => sum + freelancer.rate, 0) /
    freelancers.length
  );
}

const avg = getAvgRate();

// ==== Components ====

function singleFreelancer(freelancer) {
  // TODO
  const { name, occupation, rate: hourlyRate } = freelancer;

  const $tr = document.createElement("tr");
  $tr.classList.add("freelancer");
  $tr.innerHTML = `
  <td><strong>${name}</strong></td>
  <td>${occupation}</td>
  <td>$${hourlyRate}/hr</td>
`;
  return $tr;
}

function freelancersTable(freelancers) {
  const $table = document.createElement("table");
  $table.classList.add("freelancer-table");

  const $thead = document.createElement("thead");
  $thead.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Rate</th>
    </tr>
  `;
  $table.appendChild($thead);

  const $tbody = document.createElement("tbody");
  freelancers.forEach((freelancer) => {
    $tbody.appendChild(singleFreelancer(freelancer));
  });
  $table.appendChild($tbody);

  return $table;
}

function averageRateComponent(avgRate) {
  const $div = document.createElement("div");
  $div.textContent = `Average Freelancer Rate: $${avgRate.toFixed(2)}`;
  return $div;
}

// (Removed duplicate render function and call)

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = "";
  const $title = document.createElement("h1");
  $title.textContent = "Freelancer Forum";
  $app.appendChild($title);

  $app.appendChild(averageRateComponent(avg));
  $app.appendChild(freelancersTable(freelancers));
}

render();

// create a function with a random name, occ and price

// avg of all freelances in state
// loop over my array of freelancer object and sum up freelance.rate (using reduce function) and then divide by freelancers.length

// const AVG = //the function you wrote above
