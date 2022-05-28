const views = document.querySelector(".views");
const rangeSlider = document.querySelector("#range-slid");
const price = document.querySelector(".month-price");
const thumbSlider = document.querySelector('input[type ="checkbox"]');
const thumbSlide = document.querySelector(".toggle-thumb::before");
const year = document.querySelector(".mon");

function cal(amount) {
  let monthPrice = (amount * 12 * 0.75).toFixed(2);
  return monthPrice;
}
function slide() {
  const view = rangeSlider.value;
  let amount;

  let val = view * 25;

  rangeSlider.style.background = `linear-gradient(  to right,
  hsl(174,77%,80%)0% ,
    hsl(174, 77%, 80%) ${val}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%
  )`;

  console.log(view);
  if (view === "0" && !thumbSlider.checked) {
    views.textContent = `10K`;
    price.textContent = "$8.00";
    year.textContent = "/ month";
  } else if (view === "1" && !thumbSlider.checked) {
    views.textContent = `50K`;
    price.textContent = "$12.00";
    year.textContent = "/ month";
  } else if (view === "2" && !thumbSlider.checked) {
    views.textContent = `100K`;
    price.textContent = "$16.00";
    year.textContent = " /month";
  } else if (view === "3" && !thumbSlider.checked) {
    views.textContent = `500K`;
    price.textContent = "$24.00";
    year.textContent = "/ month";
  } else if (view === "4" && !thumbSlider.checked) {
    views.textContent = `1M`;
    price.textContent = "$36.00";
    year.textContent = "/ month";
  } else if (view === "0" && thumbSlider.checked) {
    views.textContent = `10K`;
    amount = 8;
    price.textContent = `$${cal(amount)}`;
    year.textContent = "/year";
  } else if (view === "1" && thumbSlider.checked) {
    views.textContent = `50K`;
    amount = 12;
    price.textContent = `$${cal(amount)}`;
    year.textContent = "/year";
  } else if (view === "2" && thumbSlider.checked) {
    views.textContent = `100K`;
    amount = 16;
    price.textContent = `$${cal(amount)}`;
    year.textContent = "/year";
  } else if (view === "3" && thumbSlider.checked) {
    views.textContent = `500K`;
    amount = 24;
    price.textContent = `$${cal(amount)}`;
    year.textContent = "/year";
  } else if (view === "4" && thumbSlider.checked) {
    views.textContent = `1M`;
    amount = 36;
    price.textContent = `$${cal(amount)}`;
    year.textContent = "/year";
  }
}

rangeSlider.addEventListener("input", slide);

//check if the toggle slide is clicked
// thumbSlider.addEventListener('change',e=>{
//     if (e.target.checked) {
//       console.log(e.target.value);

//     } else  {
//       console.log("m");
//     }
// })
// console.log(thumbSlider.checked);
