function updatePrice() {
  let tongTien = 0;

  let chooseCPU = document.querySelector('input[name="cpu_choice"]:checked');
  if (chooseCPU) {
    tongTien += Number(chooseCPU.value);
    document.getElementById("choose-cpu").innerText = chooseCPU.dataset.name;
  }

  let chooseGPU = document.querySelector('input[name="gpu_choice"]:checked');
  if (chooseGPU) {
    tongTien += Number(chooseGPU.value);
    document.getElementById("choose-gpu").innerText = chooseGPU.dataset.name;
  }

  let chooseRAM = document.querySelector('input[name="ram_choice"]:checked');
  if (chooseRAM) {
    tongTien += Number(chooseRAM.value);
    document.getElementById("choose-ram").innerText = chooseRAM.dataset.name;
  }

  document.getElementById("total").innerText = tongTien.toLocaleString(
    undefined,
    { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  );
}

let chooseRadio = document.querySelectorAll('input[type="radio"]');
for (let button of chooseRadio) {
  button.addEventListener("change", updatePrice);
}

const sections = document.querySelectorAll(".PartPicker section");

sections.forEach((section) => {
  const openBtn = section.querySelector(".openBtn");
  const closeBtn = section.querySelector(".closeBtn");
  const popup = section.querySelector(".popup");

  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const allPopups = document.querySelectorAll(".popup");
      for (let p of allPopups) {
        p.style.display = "none";
      }
    }
  });
  popup.addEventListener("mousedown", (event)=>{
    if (event.target===popup){
      popup.style.display="none";
    }
  });
});

const dropdownBtn = document.querySelectorAll('.dropdown-btn');
dropdownBtn.forEach(btn => {
  btn.addEventListener('click', function(event) {
    event.stopPropagation();
    const content = this.nextElementSibling;

    document.querySelectorAll('.dropdown-content.show').forEach(c => {
      if (c !== content)c.classList.remove('show'); 
    });
    content.classList.toggle('show');
  });
  
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.filter-dropdown')) {
      document.querySelectorAll('.dropdown-content.show').forEach(c => {
        c.classList.remove('show');
      });
    }
  });
});

const selectSortContainer = document.querySelector('.select-price-sorting');
const selectSortBtn = document.getElementById('selected-text');
const selectSortOptions = document.querySelector('.options');
const selectSortItems = document.querySelectorAll('.option-item');

selectSortBtn.addEventListener('click', ()=>{
  selectSortOptions.classList.toggle('open');
});

selectSortItems.forEach(item=>{
  item.addEventListener('click', ()=>{
    selectSortBtn.innerText = item.innerText + " ▼"; 
    selectSortOptions.classList.remove("open");
  });
});

document.addEventListener("mousedown", (event) => {
  if (!selectSortContainer.contains(event.target)) {
    selectSortOptions.classList.remove("open");
  }
});