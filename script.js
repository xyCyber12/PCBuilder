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
  popup.addEventListener("mousedown", (event)=>{
    if (event.target===popup){
      popup.style.display="none";
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".popup").forEach((popup) => {
      popup.style.display = "none";
    });
  }
});

document.querySelectorAll(".dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.stopPropagation();

    const content = this.nextElementSibling;

    document.querySelectorAll(".dropdown-content.show").forEach((c) => {
      if (c !== content) {
        c.classList.remove("show");
      }
    });

    content.classList.toggle("show");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".filter-dropdown")) {
    document.querySelectorAll(".dropdown-content.show").forEach((c) => {
      c.classList.remove("show");
    });
  }
});

document.querySelectorAll(".select-price-sorting").forEach((container) => {
  const btn = container.querySelector(".select-button");
  const options = container.querySelector(".options");
  const items = container.querySelectorAll(".option-item");

  btn.addEventListener("click", () => {
    options.classList.toggle("open");
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      btn.innerText = item.innerText + " ▼";
      options.classList.remove("open");
    });
  });

  document.addEventListener("mousedown", (event) => {
    if (!container.contains(event.target)) {
      options.classList.remove("open");
    }
  });
});


//---------------------INVENTORY------------------------

const parts = [
  {
    id: 1,
    category: "cpu",
    name: "AMD Ryzen 5 7600",
    price: 199,
    series: "Ryzen 5",
    socket: "AM5",
  },
  {
    id: 2,
    category: "cpu",
    name: "Intel Core i5-14400F",
    price: 189,
    series: "Core i5",
    socket: "LGA 1700",
  },
  {
    id: 3,
    category: "cpu",
    name: "Intel Core Ultra 5 245K",
    price: 299,
    series: "Core Ultra 5",
    socket: "LGA 1851",
  },

  {
    id: 4,
    category: "gpu",
    name: "NVIDIA GeForce RTX 3060",
    price: 279,
    vram: "12 GB",
    chipset: "RTX 3060",
  },
  {
    id: 5,
    category: "gpu",
    name: "NVIDIA GeForce RTX 5070",
    price: 549,
    vram: "12 GB",
    chipset: "RTX 5070",
  },
  {
    id: 6,
    category: "gpu",
    name: "AMD Radeon RX 6600",
    price: 219,
    vram: "8 GB",
    chipset: "RX6600",
  },

  {
    id: 7,
    category: "ram",
    name: "Corsair Vengeance 16GB DDR4",
    price: 45,
    capacity: "16 GB (2 x 8 GB)",
    type: "DDR4",
  },
  {
    id: 8,
    category: "ram",
    name: "Kingston Fury Beast 32GB DDR5",
    price: 89,
    capacity: "32 GB (2 x 16 GB)",
    type: "DDR5",
  },
  {
    id: 9,
    category: "ram",
    name: "Crucial 16GB DDR5",
    price: 55,
    capacity: "16 GB (1 x 16 GB)",
    type: "DDR5",
  },

  {
    id: 10,
    category: "motherboard",
    name: "ASUS TUF Gaming X870-Plus",
    price: 299,
    socket: "AM5",
    chipset: "AMD X870",
    ramType: "DDR5",
  },
  {
    id: 11,
    category: "motherboard",
    name: "MSI PRO B760M-A",
    price: 149,
    socket: "LGA 1700",
    chipset: "Intel B760",
    ramType: "DDR5",
  },
  {
    id: 12,
    category: "motherboard",
    name: "ASUS Prime Z890-P",
    price: 259,
    socket: "LGA 1851",
    chipset: "Intel Z890",
    ramType: "DDR5",
  },

  {
    id: 13,
    category: "storage",
    name: "Samsung 990 EVO 1TB SSD",
    price: 99,
    type: "SSD",
    capacity: "1 TB",
  },
  {
    id: 14,
    category: "storage",
    name: "Crucial P3 Plus 2TB SSD",
    price: 129,
    type: "SSD",
    capacity: "2 TB",
  },
  {
    id: 15,
    category: "storage",
    name: "Seagate Barracuda 4TB HDD",
    price: 89,
    type: "HDD",
    capacity: "4 TB",
  },

  {
    id: 16,
    category: "psu",
    name: "Corsair RM750e 750W",
    price: 109,
    brand: "Corsair",
    wattage: 750,
  },
  {
    id: 17,
    category: "psu",
    name: "Cooler Master MWE Gold 850W",
    price: 129,
    brand: "Cooler Master",
    wattage: 850,
  },
  {
    id: 18,
    category: "psu",
    name: "FSP Hydro G Pro 1000W",
    price: 159,
    brand: "FSP",
    wattage: 1000,
  },

  {
    id: 19,
    category: "cpu-cooler",
    name: "Cooler Master Hyper 212",
    price: 39,
    brand: "Cooler Master",
  },
  {
    id: 20,
    category: "cpu-cooler",
    name: "Deepcool AK620",
    price: 69,
    brand: "Deepcool",
  },
  {
    id: 21,
    category: "cpu-cooler",
    name: "Arctic Liquid Freezer III 240",
    price: 99,
    brand: "Arctic",
  },

  {
    id: 22,
    category: "case",
    name: "Corsair 4000D Airflow",
    price: 89,
    brand: "Corsair",
    motherboardSize: "ATX",
  },
  {
    id: 23,
    category: "case",
    name: "Cooler Master TD500 Mesh",
    price: 99,
    brand: "Cooler Master",
    motherboardSize: "ATX",
  },
  {
    id: 24,
    category: "case",
    name: "HYTE Y60",
    price: 179,
    brand: "HYTE",
    motherboardSize: "ATX",
  },
];

const totalPrice = {
  cpu: 0,
  gpu: 0,
  ram: 0,
  motherboard: 0,
  storage: 0,
  psu: 0,
  cpucooler: 0,
  case: 0
}

function updateTotalPrice(){
  let tongTien = 0;
  for (price in totalPrice) {
    tongTien += totalPrice[price];
  }
  document.getElementById("total").textContent = tongTien.toFixed(2);
}

const cpuList = document.querySelector('.parts-list[data-category="cpu"]');
for (const part of parts){
    if (part.category==="cpu"){
      const partItem = document.createElement("div");
      partItem.textContent = `${part.name}-----$${part.price}`;
      cpuList.appendChild(partItem);
      partItem.addEventListener("click",()=>{
        document.getElementById("choose-cpu").textContent = part.name;
        totalPrice.cpu = part.price;
        updateTotalPrice();
      })
    }
}
