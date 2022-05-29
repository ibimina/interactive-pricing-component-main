const views = document.querySelector(".views");
const rangeSlider = document.querySelector("#range-slid");
const price = document.querySelectorAll(".month-price");
const thumbSlider = document.querySelector('input[type ="checkbox"]');
const thumbSlide = document.querySelector(".toggle-thumb::before");
const year = document.querySelectorAll(".mon");

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
    price.forEach(element => {
      element.textContent = "$8.00";
    });
    year.textContent = "/ month";
  } else if (view === "1" && !thumbSlider.checked) {
    views.textContent = `50K`;
    price.forEach((element) => {
      element.textContent = "$12.00";
    });
     year.forEach((element) => {
       element.textContent = "/ month";
     });
   
  } else if (view === "2" && !thumbSlider.checked) {
    views.textContent = `100K`;
    price.forEach((element) => {
      element.textContent = "$16.00";
    });
     year.forEach((element) => {
       element.textContent = "/ month";
     });

  } else if (view === "3" && !thumbSlider.checked) {
    views.textContent = `500K`;
    price.forEach((element) => {
      element.textContent = "$24.00";
    });
    year.forEach((element) => {
      element.textContent = "/ month";
    });

  } else if (view === "4" && !thumbSlider.checked) {
    views.textContent = `1M`;
    price.forEach((element) => {
      element.textContent = "$36.00";
    });
    year.forEach((element) => {
      element.textContent = "/ month";
    });

  } else if (view === "0" && thumbSlider.checked) {
    views.textContent = `10K`;
    amount = 8;
    price.forEach((element) => {
      element.textContent = `$${cal(amount)}`;
    });
    year.forEach((element) => {
      element.textContent = "/ year";
    });

  } else if (view === "1" && thumbSlider.checked) {
    views.textContent = `50K`;
    amount = 12;
     price.forEach((element) => {
       element.textContent = `$${cal(amount)}`;
     });
     year.forEach((element) => {
       element.textContent = "/ year";
     });

  } else if (view === "2" && thumbSlider.checked) {
    views.textContent = `100K`;
    amount = 16;
     price.forEach((element) => {
       element.textContent = `$${cal(amount)}`;
     });
     year.forEach((element) => {
       element.textContent = "/ year";
     });

  } else if (view === "3" && thumbSlider.checked) {
    views.textContent = `500K`;
    amount = 24;
     price.forEach((element) => {
       element.textContent = `$${cal(amount)}`;
     });
     year.forEach((element) => {
       element.textContent = "/ year";
     });
  
  } else if (view === "4" && thumbSlider.checked) {
    views.textContent = `1M`;
    amount = 36;
     price.forEach((element) => {
       element.textContent = `$${cal(amount)}`;
     });
     year.forEach((element) => {
       element.textContent = "/ year";
     });

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
